export interface Feature {
  tag: string;
  text: string;
}

export type ProjectDetail = {
  id: string;
  name: string;
  description: string;
  videoUrl?: string;
  features?: Feature[];
};

export type MenuItem = {
  category: string;
  items: ProjectDetail[];
};

export const PORTFOLIO_DATA: MenuItem[] = [
  { 
    category: "HTML & CSS", 
    items: [
      { id: "1", name: "CSS Animation", description: "Keyframeを使ったアニメーションのデモです。", videoUrl: "/movies/top_page.mov" },
      { id: "2", name: "Responsive", description: "モバイルファーストなレイアウト設計です。" }
    ] 
  },
  { 
    category: "PHP", 
    items: [
      { id: "1", name: "Laravel", description: "Laravelフレームワークを使用したWebアプリケーション開発です。" }
    ] 
  },
  { 
    category: "Javascript", 
    items: [
      { id: "1", name: "Next.js", description: "Next.jsを使用してこのポートフォリオページを制作しました。" }
    ] 
  }/*,
  { 
    category: "Cross-Platform",
     items: [
      { id: 1, name: "Expo (React Native)", description: "React Nativeで構築されたクロスプラットフォームアプリケーションです。" },
      { id: 2, name: "Flutter", description: "Flutterフレームワークを使用したマルチプラットフォーム開発です。" }
    ],
  },
  { 
    category: "Elixir",
    items: [
      { id: 1, name: "This page ;)", description: "This page is built with Elixir and Phoenix." }
    ],
  },*/
];
