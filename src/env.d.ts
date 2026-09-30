interface ImportMetaEnv {
  readonly GTAG_ID?: string;
  readonly NUMIA_BASE_URL?: string;
  readonly NUMIA_API_KEY?: string;
  readonly ALLOW_MISSING_DATA?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataLayer?: unknown[];
}
