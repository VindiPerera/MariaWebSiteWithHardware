import "server-only";
import { site } from "./site";

const cloudUrl = (process.env.CLOUD_PANEL_URL ?? site.cloudPanelUrl).replace(/\/+$/, "");

export type CloudResult = { status: number; body: Record<string, unknown> };

/** Visitor IP, forwarded so the cloud panel can rate-limit per visitor instead of per website server. */
function visitorIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "";
}

/**
 * Calls the cloud panel's /api/website/* endpoints server-to-server with the
 * shared key. The key never reaches the browser.
 */
export async function callCloud(path: "signup" | "signin", payload: unknown, request: Request): Promise<CloudResult> {
  const key = process.env.CLOUD_API_KEY;
  if (!key) {
    return { status: 503, body: { message: "Accounts are temporarily unavailable. Please contact us." } };
  }

  try {
    const response = await fetch(`${cloudUrl}/api/website/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Website-Key": key,
        "X-Client-IP": visitorIp(request),
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    const body = (await response.json().catch(() => ({}))) as Record<string, unknown>;

    // Only ever send the browser to our own cloud panel.
    if (typeof body.login_url === "string" && !body.login_url.startsWith(`${cloudUrl}/`)) {
      return { status: 502, body: { message: "Unexpected response from the account server." } };
    }

    return { status: response.status, body };
  } catch {
    return { status: 502, body: { message: "Could not reach the account server. Please try again in a moment." } };
  }
}

/** Forwards only the fields a form needs; never echoes unexpected upstream data. */
export function toClientResponse({ status, body }: CloudResult): Response {
  const safe: Record<string, unknown> = {};
  for (const key of ["status", "message", "errors", "login_url", "plan", "plan_status", "username"]) {
    if (key in body) safe[key] = body[key];
  }
  if (status === 429 && !safe.message) safe.message = "Too many attempts. Please wait a minute and try again.";
  return Response.json(safe, { status });
}
