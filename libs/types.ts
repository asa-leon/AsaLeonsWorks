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
    category: "Frontedn Coding",
    items: [
      {
        id: "1",
        name: "コラムページ",
        description: "CSSとjQueryを駆使した技術モックアップ",
        // ここからが DemoSection の配列
        demos: [
          {
            title: "トップページのCSSとjQueryを利用した動作",
            videoUrl: "/movies/top_page.mov", // public/movies/ に配置
            externalLink: "/mockup-site/index.html",
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
      }
    ]
  },
  {
    category: "PHP",
    items: [
      {
        id: "1",
        name: "空席照会システム",
        description: "フルスタックなWebアプリケーション開発の事例です。\n（Laravel Framework使用：バックエンド：PHP、フロントエンド：Vue.js）",
        demos: [
          {
            title: "来客数と空席数の比較",
            videoUrl: "/movies/check_vacancy.mov",
            features: [
              { tag: "PHP", text: "入力された人数と席種に応じて、データベースに登録されている空席の数を比較し、0より下の数になる場合は『×』と表示させ、0以上の場合は『◯』と表示させる。\n最後に『確定』をするとデータベースの値を実際に人数分の数を減算する。" },
            ]
          },
          {
            title: "入力された数の正誤確認",
            videoUrl: "/movies/check_number.mov",
            features: [
              { tag: "Vue.js", text: "リアル誤った数値（この場合1から50までの数値）が入力された場合に、入力欄の下のメッセージが切り替わる。タイムでの空席状況の更新" },
            ]
          },
          {
            title: "入力された数の正誤確認",
            videoUrl: "/movies/check_input_and_selected.mov",
            features: [
              { tag: "Vue.js", text: "誤った数値ではなく、席種が一つ以上選択されている場合にのみ、『確認』ボタンが活性化状態になる。" },
            ]
          },

        ]
      }
    ]
  }
];