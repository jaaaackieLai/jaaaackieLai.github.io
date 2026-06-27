# CLAUDE.md

A personal blog built with [Astro](https://astro.build) and Tailwind CSS, deployed at [jaaaackielai.github.io](https://jaaaackielai.github.io/).

# Project Structure

```
blog/
├── src/
│   ├── data/                            # Content data (single source of truth)
│   │   ├── topics.ts                    # Topic config (slug, name, icon, gradient, descriptions); getTopic()
│   │   └── articles.ts                  # Article metadata list (registered by the blog-convert skill)
│   ├── lib/
│   │   └── articles.ts                  # ArticleMeta type + getTopicArticles() / getArticleCount() helpers
│   ├── layouts/
│   │   └── Layout.astro                 # Shared layout: nav, footer, dark/light mode toggle
│   ├── page-content/                    # User-authored zh-only markdown drafts (gitignored); source for blog-convert
│   │   ├── agentic-ai/*.md
│   │   └── deep-learning/*.md
│   ├── pages/
│   │   ├── index.astro                  # Home page (CV: hero, experience, skills, topics, education)
│   │   └── blog/
│   │       ├── index.astro              # Blog index: topic cards (driven by data/topics.ts)
│   │       ├── [topic]/index.astro      # Dynamic topic page: article list (driven by data + lib)
│   │       ├── agentic-ai/*.astro       # Built article pages (one .astro per article)
│   │       └── deep-learning/*.astro    # Built article pages (one .astro per article)
│   ├── scripts/
│   │   └── avatar-dissolve.ts           # Home page avatar dissolve animation
│   └── styles/
│       └── global.css                   # Global styles and CSS color variables (--bg, --text-1~5, --accent)
├── .github/
│   └── workflows/
│       └── deploy.yml                   # GitHub Actions: build and deploy to GitHub Pages on push to main
├── astro.config.mjs                     # Astro config (site URL, Tailwind integration)
└── tailwind.config.mjs                  # Tailwind config (fonts, warm brass accent color)
```

# Project Rules

Before changing content or previewing the site, read the relevant project rules:

- `.codex\rules\blog-content-rules.md` - content style, structure, and article publishing conventions.
- `.codex\rules\local-preview-and-verify.md` - local preview, build, and verification workflow.

## Content data flow

- `src/data/topics.ts` and `src/data/articles.ts` hold all topic and article metadata. Pages import these (plus the helpers in `src/lib/articles.ts`) to render the blog index and topic listings, so adding a topic or article is a data edit, not a page rewrite.
- Article pages are `.astro` files (cannot be scanned for frontmatter), so each article's metadata is registered in `src/data/articles.ts`. The `blog-convert` skill maintains this when converting `src/page-content/*.md` drafts into built `.astro` articles.

# Keep Claude and Codex Instructions in Sync

When updating any file or directory listed in one column, update the matching item in the other column in the same change.

| Area | Claude | Codex |
| --- | --- | --- |
| Agent settings | [CLAUDE.md](CLAUDE.md) | [AGENTS.md](AGENTS.md) |
| Rules | [.claude/rules](.claude/rules) | [.codex/rules](.codex/rules) |
| Skills | [.claude/skills](.claude/skills) | [.codex/skills](.codex/skills) |
