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
(`lib/home-data.ts`) and baked into the HTML. Cloudflare Workers Builds deploys
on every push, and `.github/workflows/rebuild.yml` triggers a rebuild hourly
through a deploy hook to keep the data fresh. A production build fails if a data source is
unavailable, so the last good deployment stays live.

Only the hero ticker and the navigation dropdown ship JavaScript (Astro
islands, `client:load`); everything else is static HTML.

## ENV config

Put these in `.env` locally. On Cloudflare they are **build** variables
(Worker → Settings → Build → Variables and secrets), not runtime variables.

| Name               |                   Description                    |
| ------------------ | :----------------------------------------------: |
| GTAG_ID            |            The Google Tag Manager ID             |
| NUMIA_BASE_URL     |                The Numia base URL                |
| NUMIA_API_KEY      |       The Numia API key (optional bearer)        |
| ALLOW_MISSING_DATA | `true` to build without API access (local only)  |

GitHub needs one secret, `CLOUDFLARE_DEPLOY_HOOK_URL`: the Workers Builds
deploy hook for the production branch, used by the hourly rebuild.
