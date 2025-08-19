// src/System/API/apiClient.js

// Hem Vite hem CRA hem de pencere global'ini destekle:
const viteEnv = (typeof import.meta !== "undefined" && import.meta.env) ? import.meta.env : undefined;
const craEnv  = (typeof process !== "undefined" && process.env) ? process.env : undefined;

// Öncelik sırası: Vite -> CRA -> window global -> fallback
const API_BASE_URL =
  (viteEnv && viteEnv.VITE_API_BASE_URL) ||
  (craEnv && craEnv.REACT_APP_API_BASE_URL) ||
  (typeof window !== "undefined" && window.__API_BASE_URL__) ||
  "https://localhost:7264/api"; // fallback

function getToken() {
  // Senin token key'in "token" ise böyle kalsın
  return localStorage.getItem("token");
}

function buildHeaders({ isJson = true, extra = {} } = {}) {
  const headers = new Headers(extra);
  const token = getToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);
  if (isJson) headers.set("Content-Type", "application/json");
  return headers;
}

async function parseError(res) {
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    try {
      const data = await res.json();
      const msg = data?.detail || data?.title || data?.message || JSON.stringify(data);
      return new Error(msg);
    } catch {/* noop */}
  }
  try {
    const txt = await res.text();
    return new Error(txt || `HTTP ${res.status}`);
  } catch {
    return new Error(`HTTP ${res.status}`);
  }
}

export async function request(
  path,
  {
    method = "GET",
    params,
    body,
    isJson = true,
    returnNullOn404 = false,
    signal,
    timeoutMs = 20000,
    headers: extraHeaders,
  } = {}
) {
  const url = new URL(`${API_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`);
  if (params && typeof params === "object") {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "") url.searchParams.set(k, v);
    });
  }

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort("timeout"), timeoutMs);
  if (signal) signal.addEventListener("abort", () => ctrl.abort("upstream-abort"), { once: true });

  try {
    const res = await fetch(url.toString(), {
      method,
      headers: buildHeaders({ isJson, extra: extraHeaders }),
      body: isJson ? (body ? JSON.stringify(body) : undefined) : body,
      signal: ctrl.signal,
    });

    if (returnNullOn404 && res.status === 404) return null;
    if (!res.ok) throw await parseError(res);
    if (res.status === 204) return;

    const ct = res.headers.get("content-type") || "";
    return ct.includes("application/json") ? res.json() : res.text();
  } finally {
    clearTimeout(timer);
  }
}
