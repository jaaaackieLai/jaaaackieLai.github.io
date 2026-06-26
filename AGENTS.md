# AGENTS.md

A personal blog built with [Astro](https://astro.build) and Tailwind CSS, deployed at [jaaaackielai.github.io](https://jaaaackielai.github.io/).

# Project Structure

```
blog/
├── src/
│   ├── layouts/
│   │   └── Layout.astro         # Shared layout: nav, footer, dark/light mode toggle
│   ├── pages/
│   │   ├── index.astro          # Home page (CV: hero, experience, skills, topics, education)
│   │   └── topics/
│   │       ├── index.astro      # Topic listing page
│   │       └── agentic-ai.astro # Agentic AI article series
│   └── styles/
│       └── global.css           # Global styles and CSS color variables (--bg, --text-1~5, --accent)
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions: build and deploy to GitHub Pages on push to main
├── astro.config.mjs             # Astro config (site URL, Tailwind integration)
└── tailwind.config.mjs          # Tailwind config (fonts, warm brass accent color)
```
