export interface DemoSection {
  title: string;
  videoUrl: string;
  externalLink?: string; // アイコンクリック時のリンク先
  features: {
    tag: string;
    text: string;
  }[];
}

export type ProjectDetail = {
  id: string;
  name: string;
  description: string;
  demos: DemoSection[];
};

export type MenuItem = {
  category: string;
  items: ProjectDetail[];
};

export const PORTFOLIO_DATA: MenuItem[] = [
  {
    category: "HTML & CSS",
    items: [
      {
        id: "1",
        name: "Frontend Coding",
        description: "CSSとjQueryを駆使した技術モックアップの詰め合わせです。",
        // ここからが DemoSection の配列
        demos: [
          {
            title: "トップページのCSSとjQueryを利用した技術のモックアップ",
            videoUrl: "/movies/top_page.mov", // public/movies/ に配置
            externalLink: "https://example.com/mockup1",
            features: [
              { tag: "CSS", text: "タイトルのエリアにカーソルが来た時の動作" },
              { tag: "jQuery", text: "ページのトップへ戻る動作" },
              { tag: "Bootstrap/CSS", text: "画面横幅が狭まった時に、タイトルの幅や並び数を変化させる" },
            ]
          },
          {
            title: "子ページのCSSを利用した挙動",
            videoUrl: "/movies/child_page.mov",
            externalLink: "https://example.com/mockup2",
            features: [
              { tag: "CSS", text: "タイトルや記事にカーソルが来た時の動作" },
              { tag: "CSS", text: "画面左側のナビゲーションの位置固定" },
              { tag: "Bootstrap/CSS", text: "画面横幅が狭まった時に、左側のナビゲーションと記事リストの幅や並び方を変化させる" },
            ]
          }
        ]
      },
      { 
        id: "2", 
        name: "Responsive Design", 
        description: "モバイルファーストなレイアウト設計です。",
        demos: [] // デモがない場合は空配列、またはオプショナル(?)なら省略可
      }
    ]
  },
  {
    category: "PHP",
    items: [
      {
        id: "1",
        name: "Laravel CMS",
        description: "フルスタックなWebアプリケーション開発の事例です。",
        demos: [
          {
            title: "管理画面のダッシュボード機能",
            videoUrl: "/movies/booking_seat_usage.mov",
            features: [
              { tag: "PHP", text: "Eloquent ORMを用いた高速なデータ取得" },
              { tag: "Blade", text: "コンポーネント化による再利用性の高いUI" }
            ]
          }
        ]
      }
    ]
  }
];