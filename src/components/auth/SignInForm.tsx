"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { AlertCircle, ArrowRight, Eye, EyeOff, Info, Loader2, Lock, ShieldCheck, User } from "lucide-react";
import { site } from "@/lib/site";
import styles from "./Auth.module.css";

// Codes the cloud portal adds when it sends someone back here (?error=…).
const portalMessages: Record<string, { text: string; isError: boolean }> = {
  link_expired: { text: "Your sign-in link expired or was already used. Please sign in again.", isError: true },
  suspended: { text: "This account has been suspended. Please contact support.", isError: true },
  signed_out: { text: "You have been signed out.", isError: false },
};

export function SignInForm() {
  const portalMessage = portalMessages[useSearchParams().get("error") ?? ""];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!username.trim() || !password) {
      setError("Please enter your username and password.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/account/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password }),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok && typeof data.login_url === "string") {
        // Keep the spinner while the browser moves to the portal.
        window.location.assign(data.login_url);
        return;
      }

      setError(data.message ?? "Sign-in failed. Please check your credentials.");
    } catch {
      setError("Network connection issue. Please check your internet and try again.");
    }
    setSubmitting(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="username" className={styles.label}>
          Username <span className={styles.req}>*</span>
        </label>
        <div className={styles.inputWrap}>
          <User size={18} className={styles.inputIcon} />
          <input
            id="username"
            name="username"
            autoComplete="username"
            placeholder="e.g. store_manager"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`${styles.input} ${styles.inputWithIcon}`}
          />
        </div>
      </div>

      <div className={styles.field}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label htmlFor="password" className={styles.label}>
            Password <span className={styles.req}>*</span>
          </label>
          <span className={styles.hint}>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
              Forgot password?
            </a>
          </span>
        </div>
        <div className={styles.inputWrap}>
          <Lock size={18} className={styles.inputIcon} />
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="••••••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${styles.input} ${styles.inputWithIcon} ${styles.inputWithToggle}`}
          />
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
      </div>

      <label className={styles.consent} style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <span>Remember this device for 30 days</span>
      </label>

      {portalMessage && !error && (
        <p className={portalMessage.isError ? styles.formError : styles.notice} role="status">
          {portalMessage.isError ? <AlertCircle size={17} /> : <Info size={17} />}
          <span>{portalMessage.text}</span>
        </p>
      )}

      {error && (
        <p className={styles.formError} role="alert">
          <AlertCircle size={17} />
          <span>{error}</span>
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 size={18} className={styles.spin} /> Authenticating…
          </>
        ) : (
          <>
            Sign in to my dashboard <ArrowRight size={18} />
          </>
        )}
      </button>

      <div className={styles.trustFoot}>
        <ShieldCheck size={14} color="#16a34a" />
        <span>Enterprise 256-Bit SSL Encrypted Connection</span>
      </div>

      <p className={styles.alt}>
        New to MariaPoS? <Link href="/sign-up">Start 7-day free trial</Link>
      </p>
    </form>
  );
}
