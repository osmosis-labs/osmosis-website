const ATTEMPTS = 3;
// landing_page_metrics alone can take ~15s on a cold Numia cache.
const TIMEOUT_MS = 45_000;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * GET a JSON resource, throwing on non-2xx so build-time failures are loud.
 * Retries 5xx responses and network errors/timeouts with backoff, since a
 * single upstream blip would otherwise fail the whole build.
 */
export async function fetchJson<T>(url: URL, init?: RequestInit): Promise<T> {
  for (let attempt = 1; ; attempt++) {
    let error: Error;
    try {
      const res = await fetch(url, {
        method: "GET",
        signal: AbortSignal.timeout(TIMEOUT_MS),
        ...init,
      });
      if (res.ok) return (await res.json()) as T;

      error = new Error(`GET ${url} failed: ${res.status} ${res.statusText}`);
      if (res.status < 500) throw error;
    } catch (e) {
      error = e instanceof Error ? e : new Error(String(e));
      if (error.message.includes(" failed: 4")) throw error;
    }

    if (attempt >= ATTEMPTS) throw error;
    console.warn(`${error.message} (attempt ${attempt}/${ATTEMPTS}), retrying`);
    await sleep(2_000 * 2 ** (attempt - 1));
  }
}
