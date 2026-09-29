/** GET a JSON resource, throwing on non-2xx so build-time failures are loud. */
export async function fetchJson<T>(url: URL, init?: RequestInit): Promise<T> {
  const res = await fetch(url, { method: "GET", ...init });
  if (!res.ok) {
    throw new Error(`GET ${url} failed: ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as T;
}
