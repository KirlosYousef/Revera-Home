# Revera website

The Revera landing page is a lightweight, static site designed for GitHub Pages. It introduces the iPhone app, links to the Egypt App Store listing, and serves the App Store privacy and terms URLs directly.

## Pages

- `/` — product landing page
- `/privacy/` — privacy policy
- `/terms/` — terms and conditions

## Build and preview

Install the npm dependencies, run `npm run build`, then preview the generated `build/` directory with the Vite preview script. The GitHub Pages workflow builds and deploys the site when changes reach `main`. The existing `CNAME` file keeps the configured custom domain.

The site is static HTML and CSS with a small script for menu behavior and scroll reveals. `public/` contains the stylesheet, script, legal pages, robots file, sitemap, and app screenshots copied from the iOS project.

See [SEO-PLAN.md](./SEO-PLAN.md) for target search intent, implemented technical SEO, and the post-launch measurement plan.
