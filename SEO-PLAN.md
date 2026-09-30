# Revera website SEO plan

## Positioning and search intent

**Search promise:** an iPhone voice recorder and AI transcription app that helps people stay present, find details in conversations, and leave with useful next steps.

The page leads with the problem and workflow, then names specific functions. This makes the page relevant to people comparing recording and transcription tools without making unsupported promises about accuracy, unlimited use, privacy, or price.

| Intent cluster | Example phrases to validate | Page treatment |
| --- | --- | --- |
| Product / brand | Revera app, Revera AI note taker, Revera transcription | Brand title, App Store links, app schema |
| Meeting capture | AI meeting notes app, meeting transcription app, meeting recorder with transcript | Hero, recording and summary feature cards, workflow section |
| Voice transcription | voice recorder with live transcription, transcribe voice memo iPhone, audio to text app | Transcription card and FAQ |
| Study and research | record lecture and transcribe, lecture transcription app, interview transcription app | Use cases in hero and editorial copy; do not create thin audience doorway pages |
| After-meeting work | transcript summarizer, meeting action items from recording, search meeting transcript | Summaries, action items, search and FAQ sections |
| Multilingual | Arabic speech to text iPhone, translate voice recording, multilingual transcription app | Language section with accurate supported-language list |

These phrases are **hypotheses**, not measured search volumes or difficulty scores. The shipped App Store listing and app behavior support the product descriptions; this repository has no connected keyword-data source. Validate demand and the exact wording in Google Search Console after the site is live, then use a keyword research source for volume and difficulty before making numerical opportunity claims.

## On-page implementation

- One descriptive H1 explains the primary benefit; sections use semantic H2/H3 headings and readable, original copy.
- The homepage title and description target voice recording, meeting transcription, searchable transcripts, summaries, and action items. Search phrases appear naturally in visible text, image alt text, and useful link labels.
- Dedicated, crawlable HTML pages are served at `/privacy/` and `/terms/`. Each page has its own title, description, canonical URL, and cross-links.
- The exact Egypt App Store URL is used for download links and `SoftwareApplication` install/download metadata.
- JSON-LD describes the actual free-to-download iOS application and features. No ratings, review markup, unsupported price claims, or invented company details are included.
- Open Graph and social preview metadata, app icon, image descriptions, viewport, theme color, and a skip link are included.

## Technical and performance implementation

- Static semantic HTML places primary copy in the original response; it does not depend on JavaScript rendering or a search crawler executing the app.
- `robots.txt` permits crawling and points to `sitemap.xml`, which lists the home, privacy, and terms paths on the existing custom domain.
- GitHub Pages gets actual directory index files for legal paths, so direct requests work without the single-page-app `404.html` fallback.
- Images use descriptive alt text and native lazy loading below the first screen. The first feature screenshot is preloaded; the page uses no video, third-party font request, analytics tag, or marketing tracker.
- CSS includes responsive layouts, keyboard focus, reduced-motion handling, and non-JavaScript content visibility.

## Content and conversion roadmap

1. Keep the homepage as the canonical product overview. Add focused pages only when Revera has useful, distinct material for a real workflow (for example, lecture notes or interview transcription), with an honest feature explanation and links to the app.
2. Once the site is connected to Search Console, verify ownership, submit the sitemap, inspect indexing for all three URLs, and record the first 28-day baseline for impressions, clicks, queries, and landing-page visits.
3. Review Search Console queries monthly. Improve copy around queries that have impressions but weak click-through; add a useful section only when it answers a recurring search need and reflects the current app.
4. Measure App Store outbound clicks with a privacy-conscious first-party approach only after choosing and documenting a consent and data-retention policy. No web analytics or trackers are installed by default.
5. Recheck feature availability, supported languages, purchase wording, App Store metadata, and privacy disclosures whenever a release changes the data flow or user-facing behavior.

## Boundaries and next steps

Search inclusion, rankings, sitelinks, and rich-result display are not guaranteed by metadata or structured data. The current domain is listed in `CNAME`; if the site later moves to a different GitHub Pages hostname or domain, update canonicals, social URLs, robots, sitemap, and schema URLs together. Search Console verification and sitemap submission require access to the chosen Google property and have not been performed from this repository.

### Search documentation

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Google Search developer guide](https://developers.google.com/search/docs/fundamentals/get-started-developers)
- [Software app structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- [Search Console](https://search.google.com/search-console/about)
