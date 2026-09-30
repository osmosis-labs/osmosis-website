// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: process.env.SITE_URL
    ? `https://${process.env.SITE_URL}`
    : "https://osmosis.zone",
  // Fully static: data is fetched at build time and the site is rebuilt on a
  // schedule (see .github/workflows/deploy.yml). No server runtime needed.
  output: "static",
  // Emit about.html (served at /about) to keep the same URLs as the Next.js site.
  build: { format: "file" },
  integrations: [react()],
  // No markdown on this site; Shiki's inline styles would conflict with the CSP.
  markdown: { syntaxHighlight: false },
  security: {
    // Emitted as a <meta> CSP with hashes for every script/style Astro
    // renders, replacing the per-request nonce middleware. Directives that
    // can't live in a <meta> tag (frame-ancestors) are set in public/_headers.
    csp: {
      directives: [
        "default-src 'self' https:",
        "img-src 'self' https://raw.githubusercontent.com https://www.googletagmanager.com blob: data:",
        "font-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "upgrade-insecure-requests",
      ],
      scriptDirective: {
        // Not strict-dynamic: it blocks the dynamic import() Astro uses to
        // hydrate islands. Inline scripts are covered by hashes instead.
        resources: ["'self'", "https://www.googletagmanager.com"],
      },
      styleDirective: {
        // React `style={{...}}` props render as inline style attributes.
        resources: [
          "'self'",
          { resource: "'unsafe-inline'", kind: "attribute" },
        ],
      },
    },
  },
});
