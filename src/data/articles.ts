import type { ArticleMeta } from '../lib/articles';

// 文章 metadata 清單(列表頁與文章數的唯一來源)。
//
// 成品文章是 src/pages/blog/<topic>/<slug>.astro,無法被掃描 frontmatter,
// 所以每篇文章的 metadata 集中登記在這裡。
//
// 維護方式:由轉檔流程(skill: blog-convert)在把 page-content/*.md 轉成 .astro 時
// 同步 upsert 對應項目。使用者不需手動編輯這個檔。
//
// readTime:中文字數 ÷ 300(四捨五入,至少 1)。stub 文章先沿用估計值,
// 內容寫好重轉時會更新。
export const articles: ArticleMeta[] = [
  {
    topic: 'agentic-ai',
    slug: 'claude-code-setup',
    url: '/blog/agentic-ai/claude-code-setup',
    title: { zh: 'Claude Code 初始化與設定', en: 'Claude Code Setup & Configuration' },
    date: '2026-06-20',
    readTime: 10,
    desc: {
      zh: '介紹如何設定 Claude Code 以及我自己安裝了那些好用的工具。',
      en: 'How to set up Claude Code and the tools I personally installed to supercharge the workflow.',
    },
    tags: ['Claude Code', 'Setup', 'Tools'],
  },
  {
    topic: 'agentic-ai',
    slug: 'harness-engineering',
    url: '/blog/agentic-ai/harness-engineering',
    title: { zh: 'Harness Engineering', en: 'Harness Engineering' },
    date: '2026-06-22',
    readTime: 15,
    desc: {
      zh: '探討在當前已經有足夠好的 LLM 模型底下,我們如何「駕馭」LLM 來協助我們處理任務。',
      en: 'How to harness capable LLMs to reliably handle complex tasks, given the models are already good enough.',
    },
    tags: ['LLM', 'Prompt Engineering', 'Orchestration'],
  },
  {
    topic: 'agentic-ai',
    slug: 'loop-engineering',
    url: '/blog/agentic-ai/loop-engineering',
    title: { zh: 'Loop Engineering', en: 'Loop Engineering' },
    date: '2026-06-24',
    readTime: 12,
    desc: {
      zh: '分析如何創建一個閉合式循環讓 LLM 可以自主下指令、優化並完成長時間任務。',
      en: 'Designing closed-loop systems where an LLM autonomously issues commands, self-corrects, and completes long-horizon tasks.',
    },
    tags: ['Agentic Loop', 'Autonomy', 'Long-horizon Tasks'],
  },
  {
    topic: 'deep-learning',
    slug: 'transformer',
    url: '/blog/deep-learning/transformer',
    title: { zh: 'Transformer', en: 'Transformer' },
    date: '2026-06-27',
    readTime: 1,
    desc: { zh: '', en: '' },
    tags: ['Self-Attention', 'NLP'],
  },
  {
    topic: 'deep-learning',
    slug: 'cnn',
    url: '/blog/deep-learning/cnn',
    title: { zh: 'CNN', en: 'CNN' },
    date: '2026-06-27',
    readTime: 1,
    desc: { zh: '', en: '' },
    tags: ['Computer Vision', 'Convolution'],
  },
  {
    topic: 'deep-learning',
    slug: 'resnet',
    url: '/blog/deep-learning/resnet',
    title: { zh: 'ResNet', en: 'ResNet' },
    date: '2026-06-27',
    readTime: 1,
    desc: { zh: '', en: '' },
    tags: ['Skip Connection', 'Deep Learning'],
  },
];
