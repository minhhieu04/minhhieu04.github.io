# Hiếu Trần — personal portfolio

An expressive, bilingual portfolio about connecting people, ideas and technology. Selected work across learning, community services and everyday operations, with an open-minded approach to different roles and industries.

[Visit the portfolio](https://minhhieu04.github.io/). Local preview: **http://localhost:5177/**.

## Built with

Semantic HTML, TypeScript and Vite. Locally hosted Inter and Cormorant Garamond. No UI framework, analytics, tracking pixels or third-party font requests.

- English / Vietnamese with an optional locally saved preference
- Five project studies with direct hash links and keyboard-accessible native dialogs
- Responsive layouts and reduced-motion support
- Real portrait and a local-development screenshot of SignBridge
- GL Lifestyle+ product showcase with official store links and attributed promotional images
- Product-first case studies with optional technical details, plus an editorial approach and experience section
- Original SVG illustrations for ROBERP's planning and company-switching workflows and the idea-to-product story
- GitHub Pages deployment from the prebuilt `docs/` folder, after a local typecheck and production build

## Development

```sh
npm ci
npm run dev
npm run build
```

The development server uses port 5177. Edit content in `index.html` and `src/main.ts`, styles in `src/style.css`.

## Publishing

GitHub Pages serves `main:/docs`. The source is included alongside the reviewed static build; no workflow or additional OAuth permissions are required. To update, run the build, replace the contents of `docs/` with the new build output, preserve `docs/.nojekyll`, verify locally, and commit the source and published output together. No private application source is included.

## Content boundaries

Professional projects are high-level accounts of team contributions. Their proprietary source, customer data and internal screens are not included. SignBridge recognition is experimental; AIEN is a foundation-stage project. This portfolio does not imply that either is a validated production AI system.

ROBERP is described as business-management software for the French market, with a contribution across React/Apollo frontend and Django/GraphQL backend. Company-specific configuration and data scope describe the application model, not separate physical databases or an independent security-audit claim. The editorial interface illustration depicts planning and company switching with fictional content; it is not a reproduction of the actual product UI.

Photographs, résumé and personal content belong to Hiếu Trần. Project names belong to their respective owners. GL Lifestyle+ promotional images belong to Gamuda; original sources and market-specific context are recorded in [`public/images/gl-lifestyle/SOURCES.md`](public/images/gl-lifestyle/SOURCES.md).
