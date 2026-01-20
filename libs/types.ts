export type ProjectDetail = {
  id: number;
  name: string;
  description: string;
};

export type MenuItem = {
  category: string;
  items: ProjectDetail[];
};

export const PORTFOLIO_DATA: MenuItem[] = [
  { 
    category: "HTML & CSS", 
    items: [
      { id: 1, name: "CSS Animation", description: "Keyframeを使ったアニメーションのデモです。" },
      { id: 2, name: "Responsive", description: "モバイルファーストなレイアウト設計です。" }
    ] 
  },
  { 
    category: "PHP", 
    items: [
      { id: 1, name: "PHP with Database", description: "データベースとの連携を含むPHPの実装です。" },
      { id: 2, name: "Laravel", description: "Laravelフレームワークを使用したWebアプリケーション開発です。" }
    ] 
  },
  { 
    category: "Javascript", 
    items: [
      { id: 1, name: "Next.js", description: "App Routerを使用した最新の構成です。" },
      { id: 2, name: "Vue.js", description: "Options APIを用いたコンポーネント設計です。" }
    ] 
  },
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
  },
];
