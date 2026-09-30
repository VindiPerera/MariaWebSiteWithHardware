"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Eye,
  EyeOff,
  Globe,
  Info,
  Loader2,
  Lock,
  Mail,
  PartyPopper,
  Phone,
  ShieldCheck,
  User,
  type LucideIcon,
} from "lucide-react";
import { isPlanId, signupPlans, type PlanId } from "@/lib/plans";
import { site } from "@/lib/site";
import styles from "./Auth.module.css";

type Values = {
  business_name: string;
  owner_name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  username: string;
  password: string;
  password_confirmation: string;
};

type Errors = Partial<Record<keyof Values | "plan", string>>;

type Success = { loginUrl: string; planStatus: string; username: string };

const USERNAME_RE = /^[A-Za-z0-9._@-]{3,50}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-\s]{6,30}$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.business_name.trim()) e.business_name = "Enter your business name.";
  if (!v.owner_name.trim()) e.owner_name = "Enter your name.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (!PHONE_RE.test(v.phone.trim())) e.phone = "Enter a valid phone number.";
  if (!v.country.trim()) e.country = "Enter your country.";
  if (!USERNAME_RE.test(v.username.trim()))
    e.username = "3–50 characters: letters, numbers, dots, dashes, underscores or @.";
  if (v.password.length < 8) e.password = "Use at least 8 characters.";
  if (v.password_confirmation !== v.password) e.password_confirmation = "Passwords do not match.";
  return e;
}

export function SignUpForm({ countryNames }: { countryNames: string[] }) {
  const params = useSearchParams();
  const initialPlan = params.get("plan");

  const [plan, setPlan] = useState<PlanId>(isPlanId(initialPlan) ? initialPlan : "trial");
  const [values, setValues] = useState<Values>({
    business_name: params.get("business") ?? "",
    owner_name: "",
    email: params.get("email") ?? "",
    phone: params.get("phone") ?? "",
    country: "",
    city: "",
    username: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<Success | null>(null);

  // Send the new user into their portal a moment after the success screen shows.
  useEffect(() => {
    if (!success) return;
    const delay = success.planStatus === "pending_payment" ? 6000 : 3000;
    const timer = setTimeout(() => window.location.assign(success.loginUrl), delay);
    return () => clearTimeout(timer);
  }, [success]);

  const update = (field: keyof Values) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");

    const clientErrors = validate(values);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) {
      setFormError("Please check the highlighted fields above.");
      return;
    }
    if (!agreed) {
      setFormError("Please accept the Terms & Conditions and Privacy Policy to proceed.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/account/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          business_name: values.business_name.trim(),
          owner_name: values.owner_name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          country: values.country.trim(),
          city: values.city.trim(),
          username: values.username.trim(),
          plan,
        }),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok && typeof data.login_url === "string") {
        setSuccess({ loginUrl: data.login_url, planStatus: String(data.plan_status), username: String(data.username) });
        return;
      }

      if (response.status === 422 && data.errors) {
        const serverErrors: Errors = {};
        for (const [field, messages] of Object.entries(data.errors as Record<string, string[]>)) {
          serverErrors[field as keyof Errors] = messages[0];
        }
        setErrors(serverErrors);
        setFormError("Please check the highlighted fields above.");
      } else {
        setFormError(data.message ?? "Registration could not be completed. Please try again.");
      }
    } catch {
      setFormError("Network error. Please check your internet and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    const pending = success.planStatus === "pending_payment";
    const chosen = signupPlans.find((p) => p.id === plan);
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon}>
          <PartyPopper size={32} />
        </span>
        <h2 className={styles.successTitle}>Your MariaPoS account is ready!</h2>
        <p className={styles.successText}>
          {pending
            ? `You have ${site.trialDays} days of full access starting now. Our team will contact you to complete payment for your ${chosen?.name}, and your full licence starts as soon as it's confirmed.`
            : `Your ${site.trialDays}-day free trial has been activated. Taking you directly to your business dashboard…`}
        </p>
        <dl className={styles.successFacts}>
          <dt>Username</dt>
          <dd>{success.username}</dd>
          <dt>Selected Plan</dt>
          <dd>{pending ? `${chosen?.name} (payment pending)` : chosen?.name}</dd>
        </dl>
        <p className={styles.hint}>
          Use the same username and password to activate MariaPoS on your counter Windows PC.
        </p>
        <a href={success.loginUrl} className={styles.submit}>
          Go to my dashboard <ArrowRight size={18} />
        </a>
      </div>
    );
  }

  const field = (
    name: keyof Values,
    label: string,
    Icon: LucideIcon,
    props: React.InputHTMLAttributes<HTMLInputElement> = {}
  ) => (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label} {props.required !== false && <span className={styles.req}>*</span>}
      </label>
      <div className={styles.inputWrap}>
        <Icon size={17} className={styles.inputIcon} />
        <input
          id={name}
          name={name}
          value={values[name]}
          onChange={update(name)}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          className={`${styles.input} ${styles.inputWithIcon} ${errors[name] ? styles.inputError : ""}`}
          {...props}
          required={props.required !== false}
        />
      </div>
      {errors[name] && (
        <span id={`${name}-error`} className={styles.error}>
          {errors[name]}
        </span>
      )}
    </div>
  );

  const passwordField = (name: "password" | "password_confirmation", label: string) => (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label} <span className={styles.req}>*</span>
      </label>
      <div className={styles.inputWrap}>
        <Lock size={17} className={styles.inputIcon} />
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          placeholder="••••••••••••"
          required
          value={values[name]}
          onChange={update(name)}
          aria-invalid={Boolean(errors[name])}
          className={`${styles.input} ${styles.inputWithIcon} ${styles.inputWithToggle} ${errors[name] ? styles.inputError : ""}`}
        />
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setShowPassword((s) => !s)}
          aria-label={showPassword ? "Hide passwords" : "Show passwords"}
        >
          {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
        </button>
      </div>
      {errors[name] && <span className={styles.error}>{errors[name]}</span>}
    </div>
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* 1. Plan Picker */}
      <fieldset className={styles.group}>
        <legend className={styles.legend}>1. Choose your plan</legend>
        <div className={styles.plans} role="radiogroup">
          {signupPlans.map((p) => {
            const isSelected = plan === p.id;
            const is3Year = p.id === "3y";
            const is2Year = p.id === "2y";
            const isTrial = p.id === "trial";
            return (
              <label key={p.id} className={`${styles.plan} ${isSelected ? styles.planActive : ""}`}>
                <input type="radio" name="plan" value={p.id} checked={isSelected} onChange={() => setPlan(p.id)} />
                {isTrial && <span className={styles.planBadge}>Recommended</span>}
                {is2Year && <span className={styles.planBadge}>Save 20%</span>}
                {is3Year && <span className={`${styles.planBadge} ${styles.planBadgeGold}`}>Best Value · Save 35%</span>}
                <span className={styles.planName}>{p.name}</span>
                <span className={styles.planPrice}>{p.price}</span>
                <span className={styles.planNote}>{p.note}</span>
                {isSelected && <CheckCircle2 size={18} className={styles.planCheck} />}
              </label>
            );
          })}
        </div>
        {plan !== "trial" && (
          <p className={styles.notice}>
            <Info size={16} />
            <span>
              You&apos;ll get {site.trialDays} days of full access immediately. Our billing team will contact you to
              confirm payment, and your full licence activates as soon as verified.
            </span>
          </p>
        )}
      </fieldset>

      {/* 2. Business Details */}
      <fieldset className={styles.group}>
        <legend className={styles.legend}>2. Your business details</legend>
        <div className={styles.row}>
          {field("business_name", "Business name", Building2, {
            autoComplete: "organization",
            placeholder: "e.g. City Supermarket",
            maxLength: 120,
          })}
          {field("owner_name", "Your full name", User, {
            autoComplete: "name",
            placeholder: "e.g. Alexander Smith",
            maxLength: 120,
          })}
        </div>
        <div className={styles.row}>
          {field("email", "Email address", Mail, {
            type: "email",
            autoComplete: "email",
            placeholder: "alex@example.com",
            maxLength: 191,
          })}
          {field("phone", "Phone / WhatsApp", Phone, {
            type: "tel",
            autoComplete: "tel",
            placeholder: "+1 234 567 8900",
            maxLength: 30,
          })}
        </div>
        <div className={styles.row}>
          {field("country", "Country", Globe, {
            list: "signup-countries",
            autoComplete: "country-name",
            placeholder: "Select your country",
            maxLength: 80,
          })}
          {field("city", "City", Building2, {
            autoComplete: "address-level2",
            placeholder: "e.g. Chicago",
            maxLength: 80,
            required: false,
          })}
        </div>
        <datalist id="signup-countries">
          {countryNames.map((name) => (
            <option key={name} value={name} />
          ))}
        </datalist>
      </fieldset>

      {/* 3. Account Login */}
      <fieldset className={styles.group}>
        <legend className={styles.legend}>3. Your admin login</legend>
        {field("username", "Desired Username", User, {
          autoComplete: "username",
          placeholder: "e.g. alex_store",
          maxLength: 50,
        })}
        <span className={styles.hint}>
          You will use this username and password to log in to the cloud dashboard and activate MariaPoS on your tills.
        </span>
        <div className={styles.row}>
          {passwordField("password", "Password")}
          {passwordField("password_confirmation", "Re-enter password")}
        </div>
      </fieldset>

      <label className={styles.consent} style={{ cursor: "pointer" }}>
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        <span>
          I agree to the <Link href="/terms-and-conditions">Terms &amp; Conditions</Link> and{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </span>
      </label>

      {formError && (
        <p className={styles.formError} role="alert">
          <AlertCircle size={17} />
          <span>{formError}</span>
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 size={18} className={styles.spin} /> Creating your account…
          </>
        ) : (
          <>
            {plan === "trial" ? `Start ${site.trialDays}-day free trial` : "Create MariaPoS account"}{" "}
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <div className={styles.trustFoot}>
        <ShieldCheck size={14} color="#16a34a" />
        <span>No Credit Card Required for Trial · Instant Cloud Activation</span>
      </div>

      <p className={styles.alt}>
        Already have an account? <Link href="/sign-in">Sign in here</Link>
      </p>
    </form>
  );
}
