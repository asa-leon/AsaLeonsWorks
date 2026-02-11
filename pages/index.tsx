import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/layout';
import { TypingText } from '../components/TypingText';
import { PORTFOLIO_DATA, MenuItem, ProjectDetail } from '../libs/types';
import { Montserrat_Subrayada } from 'next/font/google';

const montserratSub = Montserrat_Subrayada({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<MenuItem>(PORTFOLIO_DATA[0]);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail>(PORTFOLIO_DATA[0].items[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ハイドレーション＆演出用ステート
  const [hasMounted, setHasMounted] = useState(false);
  const [showWelcomeTyping, setShowWelcomeTyping] = useState(true);

  // サイドバーのアコーディオン状態（初期状態で最初のカテゴリを開いておく）
  const [openCategories, setOpenCategories] = useState<string[]>([PORTFOLIO_DATA[0].category]);

  useEffect(() => {
    setHasMounted(true);
    const timer = setTimeout(() => setShowWelcomeTyping(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // カテゴリ切り替え時の連動ロジック（タブ操作など用）
  useEffect(() => {
    const isProjectInCategory = selectedCategory.items.some(
      item => item.name === selectedProject.name
    );
    if (!isProjectInCategory && selectedCategory.items.length > 0) {
      setSelectedProject(selectedCategory.items[0]);
    }
  }, [selectedCategory]);

  // アコーディオンの開閉制御
  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  // 項目選択時の共通処理
  const handleSelect = (category: MenuItem, project: ProjectDetail) => {
    setSelectedCategory(category);
    setSelectedProject(project);
    // モバイル時は選択後に閉じる
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  // ハイドレーションエラー防止
  if (!hasMounted) {
    return <div className="min-h-screen bg-[#DDE7E5]" />;
  }

  return (
    <Layout>
      <div className="flex w-full min-h-screen relative">

        {/* --- 左サイドバー --- */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-white p-10 transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 md:flex md:shrink-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          <div className="flex flex-col gap-10 w-full">
            <h1 className={`${montserratSub.className} text-5xl font-black leading-[0.85] tracking-tighter uppercase select-none `}>
              HIGA<br />KOSK'S<br />WORKS
            </h1>

            <nav className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
              {PORTFOLIO_DATA.map((group) => {
                const isOpen = openCategories.includes(group.category);
                const isSelected = selectedCategory.category === group.category;

                return (
                  <div key={group.category} className="select-none">
                    {/* カテゴリ名（親） */}
                    <h2
                      className={`flex items-center text-xl font-bold cursor-pointer transition-colors ${isSelected ? "text-blue-600" : "hover:text-blue-400"
                        }`}
                      onClick={() => {
                        toggleCategory(group.category);
                        setSelectedCategory(group);
                      }}
                    >
                      <span className="mr-2 text-[10px] w-4 flex-shrink-0">
                        {isOpen ? "▼" : "▶"}
                      </span>
                      {group.category}
                    </h2>

                    {/* 子要素：スライドアニメーション */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="ml-4 pl-4 border-l-2 border-slate-200 mt-2 space-y-2 overflow-hidden"
                        >
                          {group.items.map((item) => (
                            <li
                              key={`${group.category}-${item.id}`}
                              onClick={() => handleSelect(group, item)}
                              className={`text-base cursor-pointer transition-colors ${selectedProject.name === item.name && isSelected
                                ? "text-blue-600 font-bold"
                                : "text-slate-500 hover:text-blue-400"
                                }`}
                            >
                              {item.name}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* --- 右側メインコンテンツ --- */}
        <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">

          {/* モバイルヘッダー */}
          <header className="md:hidden flex h-[60px] items-center justify-between p-4 bg-white border-b border-slate-200 shrink-0">
            <span className={`${montserratSub.className} font-black text-xl leading-[0.85] tracking-tighter uppercase`}>HIGA KOSK'S <br />WORKS</span>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded"
            >
              MENU
            </button>
          </header>

          {/* 上部タブ */}
          <nav className="flex bg-white border-b border-slate-200 overflow-x-auto no-scrollbar shrink-0 h-[40px] md:h-[60px]">
            {PORTFOLIO_DATA.map((group) => (
              <button
                key={group.category}
                onClick={() => {
                  setSelectedCategory(group);
                  // タブを押したときはアコーディオンも開くようにする
                  if (!openCategories.includes(group.category)) {
                    setOpenCategories(prev => [...prev, group.category]);
                  }
                }}
                className={`
                  px-6 md:px-12
                  h-full
                  flex items-center justify-center
                  text-xs md:text-sm
                  font-bold border-r border-slate-100 transition-all whitespace-nowrap
                  ${selectedCategory.category === group.category
                    ? "bg-[#DDE7E5] text-slate-800"
                    : "text-slate-400 hover:bg-slate-50"
                  }
                `}
              >
                {group.category}
              </button>
            ))}
          </nav>

          <main className="flex-1 p-6 md:p-12 overflow-y-auto space-y-8 bg-[#DDE7E5]/30">
            {/* コマンドライン部分 */}
            <div className="font-mono text-sm md:text-base leading-relaxed text-slate-700">
              <p>
                higakosk@works ~ %{' '}
                {showWelcomeTyping ? (
                  <TypingText text="welcome" />
                ) : (
                  <span>welcome</span>
                )}
                {showWelcomeTyping && (
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-slate-700 ml-1 translate-y-1"
                  />
                )}
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p>Please choose any number below to see details.</p>
                <ul className="mt-4 space-y-2">
                  {selectedCategory.items.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => setSelectedProject(item)}
                      className={`cursor-pointer w-fit px-2 py-1 transition-all ${selectedProject.name === item.name
                        ? "bg-slate-800 text-white translate-x-1"
                        : "underline underline-offset-4 hover:bg-white/50"
                        }`}
                    >
                      {item.id}) {item.name}.
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* ターミナルウィンドウ */}
            <div className="w-full max-w-5xl aspect-[4/3] bg-[#2D2D2D] rounded-xl shadow-2xl overflow-hidden flex flex-col border border-white/10">
              {/* ウィンドウバー */}
              <div className="p-3 md:p-4 flex gap-2 bg-[#333] shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>

              <div className="flex-1 p-4 md:p-8 overflow-y-auto">
                {/* タイトル */}
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#4FC3F7] font-mono">
                  &gt; <TypingText text={selectedProject.name} />
                </h3>

                {/* コンテンツエリア：動画と解説の2カラム */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                  {/* 左側：動画プレビュー */}
                  <div className="space-y-4">
                    <div className="relative aspect-[16/9] bg-black rounded shadow-lg overflow-hidden border border-white/5">
                      <video
                        src={selectedProject.videoUrl}
                        className="w-full object-cover"
                        loop
                        playsInline
                        muted
                        autoPlay
                      />
                    </div>
                    <p className="text-xs text-slate-400 font-mono italic">
                      ※ {selectedProject.description}
                    </p>
                  </div>

                  {/* 右側：機能解説リスト */}
                  <div className="space-y-6">
                    {selectedProject.features?.map((feature, index) => (
                      <div key={index} className="group border-b border-white/10 pb-4 last:border-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 bg-slate-700 text-[10px] text-slate-300 rounded uppercase font-bold tracking-wider">
                            {feature.tag}
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-[#4FC3F7] mt-1.5">•</span>
                          <p className="text-sm md:text-base text-slate-200 leading-relaxed font-mono">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* データがない場合のフォールバック */}
                    {!selectedProject.features && (
                      <p className="text-slate-500 italic text-sm">No detailed features listed.</p>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </main>
        </div>

        {/* モバイル用背景オーバーレイ */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}