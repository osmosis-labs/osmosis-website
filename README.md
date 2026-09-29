# Osmosis Website

Static site built with [Astro](https://astro.build) (React components, Tailwind)
and served from Cloudflare Workers static assets.

## Getting Started

```bash
bun install
bun run dev        # local dev server
bun run build      # static build into dist/
bun run preview    # serve dist/ with wrangler, as Cloudflare would
```

## How data works

Token stats, metrics and price changes are fetched **at build time**
(`lib/home-data.ts`) and baked into the HTML. The deploy workflow rebuilds the
site hourly to keep them fresh. A production build fails if a data source is
unavailable, so the last good deployment stays live.

Only the hero ticker and the navigation dropdown ship JavaScript (Astro
islands, `client:load`); everything else is static HTML.

## ENV config

Put these in `.env` locally, or in the GitHub repo variables/secrets for CI:

| Name                  |                   Description                   |
| --------------------- | :---------------------------------------------: |
| GTAG_ID               |            The Google Tag Manager ID            |
| NUMIA_BASE_URL        |               The Numia base URL                |
| NUMIA_API_KEY         |       The Numia API key (optional bearer)       |
| ALLOW_MISSING_DATA    | `true` to build without API access (local only) |
| CLOUDFLARE_API_TOKEN  |            Deploy token (CI secret)             |
| CLOUDFLARE_ACCOUNT_ID |             Cloudflare account (CI)             |
