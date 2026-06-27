// Topic 視覺設定(集中於此)。
// 新增一個 topic 只要在這個陣列加一筆,topic 列表頁與 blog 首頁會自動帶出。
// icon:Heroicons outline 風格的單一 path 的 `d` 值;svg 外框由元件統一渲染。

export interface Topic {
  slug: string;
  name: string;
  gradient: string; // tailwind 漸層 class,用於 icon 方塊
  iconPath: string; // <path d="..."> 的 d 值
  desc: { zh: string; en: string }; // topic 頁 header 段落
  card: {
    desc: { zh: string; en: string }; // blog 首頁卡片描述
    tags: string[];
  };
}

export const topics: Topic[] = [
  {
    slug: 'agentic-ai',
    name: 'Agentic AI',
    gradient: 'from-violet-500 to-indigo-600',
    iconPath:
      'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    desc: {
      zh: 'AI Agent 是能夠自主規劃、呼叫工具、並在複雜環境中完成任務的系統,遠不止是更聰明的聊天機器人。這個系列整理了我對 Agentic AI 架構的理解與實踐心得。',
      en: 'AI Agents are systems that can autonomously plan, call tools, and complete tasks in complex environments, well beyond being smarter chatbots. This series documents my understanding and hands-on experience with Agentic AI architectures.',
    },
    card: {
      desc: {
        zh: '探索 AI Agent 系統的設計原則、multi-agent 協作架構,以及如何在實際應用中落地。',
        en: 'Exploring the design principles of AI Agent systems, multi-agent collaboration architectures, and how to deploy them in real-world applications.',
      },
      tags: ['LLM', 'Multi-Agent', 'Harness', 'Loop'],
    },
  },
  {
    slug: 'deep-learning',
    name: 'Deep Learning',
    gradient: 'from-blue-500 to-cyan-600',
    iconPath:
      'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
    desc: {
      zh: '從 CNN 到 Transformer,系統性整理現代深度學習核心架構的設計思路與原理。',
      en: 'From CNNs to Transformers, a systematic look at the design principles behind modern deep learning architectures.',
    },
    card: {
      desc: {
        zh: '從 CNN 到 Transformer,系統性整理現代深度學習核心架構的設計思路與原理。',
        en: 'From CNNs to Transformers, a systematic look at the design principles behind modern deep learning architectures.',
      },
      tags: ['Transformer', 'CNN', 'ResNet', 'Neural Networks'],
    },
  },
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}
