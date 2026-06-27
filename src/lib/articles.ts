import { articles } from '../data/articles';

// 文章 metadata 的統一形狀。列表頁與 blog 首頁都用這個。
// 成品文章是 .astro(無法被掃描 frontmatter),所以 metadata 集中在
// src/data/articles.ts,由轉檔流程(skill: blog-convert)在轉檔時維護。
export interface ArticleMeta {
  topic: string;
  slug: string;
  url: string;
  title: { zh: string; en: string };
  date: string; // YYYY-MM-DD
  readTime: number; // 分鐘
  desc: { zh: string; en: string };
  tags: string[];
}

// 取得某 topic 下所有文章,依日期由舊到新排序。
export function getTopicArticles(topic: string): ArticleMeta[] {
  return articles
    .filter((a) => a.topic === topic)
    .sort((a, b) => a.date.localeCompare(b.date));
}

// 某 topic 的文章數(供 blog 首頁卡片顯示)。
export function getArticleCount(topic: string): number {
  return getTopicArticles(topic).length;
}
