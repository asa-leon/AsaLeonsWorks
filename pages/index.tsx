import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/layout';
import { TypingText } from '../components/TypingText';
import { PORTFOLIO_DATA, MenuItem, ProjectDetail } from '../libs/types';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<MenuItem>(PORTFOLIO_DATA[0]);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail>(PORTFOLIO_DATA[0].items[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [hasMounted, setHasMounted] = useState(false);
  const [showWelcomeTyping, setShowWelcomeTyping] = useState(true);
  const [openCategories, setOpenCategories] = useState<string[]>([PORTFOLIO_DATA[0].category]);

  useEffect(() => {
    setHasMounted(true);
    const timer = setTimeout(() => setShowWelcomeTyping(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const isProjectInCategory = selectedCategory.items.some(
      item => item.name === selectedProject.name
    );
    if (!isProjectInCategory && selectedCategory.items.length > 0) {
      setSelectedProject(selectedCategory.items[0]);
    }
  }, [selectedCategory]);

  useEffect(() => {
    // プロジェクトが切り替わったときに実行
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: 'smooth' // SCSSで設定済みならこれだけでも滑らかになります
      });
    }
  }, [selectedProject]); // selectedProjectが変わるたびに発火

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleSelect = (category: MenuItem, project: ProjectDetail) => {
    setSelectedCategory(category);
    setSelectedProject(project);
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  if (!hasMounted) {
    return <div className="min-h-screen bg-[#DDE7E5]" />;
  }

  return (
    <Layout>
      <div className="flex w-full min-h-screen relative">
        {/* --- 左サイドバー --- */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-60 bg-white p-6 border-r border-slate-100 transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 md:flex md:shrink-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          <div className="flex flex-col gap-8 w-full">
            {/* タイトルサイズを 5xl -> 4xl に微調整して視認性確保 */}
            <h1 className={"font-subrayada text-4xl md:text-5xl leading-[0.85] text-slate-800"}>
              HIGA<br />KOSK'S<br />WORKS
            </h1>

            <nav className="space-y-5 overflow-y-auto pr-2 custom-scrollbar">
              {PORTFOLIO_DATA.map((group) => {
                const isOpen = openCategories.includes(group.category);
                const isSelected = selectedCategory.category === group.category;
                return (
                  <div key={group.category} className="select-none">
                    {/* カテゴリ名を text-xl -> text-lg に調整 */}
                    <h2
                      className={`flex items-center text-lg font-bold cursor-pointer transition-colors ${isSelected ? "text-blue-600" : "hover:text-blue-400"}`}
                      onClick={() => {
                        toggleCategory(group.category);
                        setSelectedCategory(group);
                      }}
                    >
                      <span className="mr-2 text-[8px] w-3 flex-shrink-0">
                        {isOpen ? "▼" : "▶"}
                      </span>
                      {group.category}
                    </h2>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="ml-3 pl-3 border-l-2 border-slate-100 mt-2 space-y-1.5 overflow-hidden"
                        >
                          {group.items.map((item) => (
                            <li
                              key={`${group.category}-${item.id}`}
                              onClick={() => handleSelect(group, item)}
                              className={`text-sm cursor-pointer transition-colors ${selectedProject.name === item.name && isSelected ? "text-blue-600 font-bold" : "text-slate-500 hover:text-blue-400"}`}
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
          <header className="md:hidden flex h-[60px] items-center justify-between p-4 bg-white border-b border-slate-200 shrink-0">
            <span className={"font-subrayada font-black text-xl leading-[0.85] tracking-tighter uppercase"}>HIGA KOSK'S <br />WORKS</span>
            <button onClick={() => setIsSidebarOpen(true)} className="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded">MENU</button>
          </header>

          <nav className="flex bg-white border-b border-slate-200 overflow-x-auto no-scrollbar shrink-0 h-[40px] md:h-[60px]">
            {PORTFOLIO_DATA.map((group) => (
              <button
                key={group.category}
                onClick={() => {
                  setSelectedCategory(group);
                  if (!openCategories.includes(group.category)) setOpenCategories(prev => [...prev, group.category]);
                }}
                className={`px-6 md:px-12 h-full flex items-center justify-center text-xs md:text-sm font-bold border-r border-slate-100 transition-all whitespace-nowrap ${selectedCategory.category === group.category ? "bg-[#DDE7E5] text-slate-800" : "text-slate-400 hover:bg-slate-50"}`}
              >
                {group.category}
              </button>
            ))}
          </nav>

          <main
            ref={mainRef}
            className="flex-1 p-6 md:p-12 overflow-y-auto space-y-8 bg-[#DDE7E5]/30 custom-scrollbar">
            <div className="font-mono text-sm md:text-base leading-relaxed text-slate-700">
              <p>
                higakosk@works ~ % {showWelcomeTyping ? <TypingText text="welcome" /> : <span>welcome</span>}
                {showWelcomeTyping && <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-4 bg-slate-700 ml-1 translate-y-1" />}
              </p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <p>Please choose any number below to see details.</p>
                <ul className="mt-4 space-y-2">
                  {selectedCategory.items.map((item) => (
                    <li key={item.id} onClick={() => setSelectedProject(item)} className={`cursor-pointer w-fit px-2 py-1 transition-all ${selectedProject.name === item.name ? "bg-slate-800 text-white translate-x-1" : "underline underline-offset-4 hover:bg-white/50"}`}>
                      {item.id}) {item.name}.
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* ターミナルウィンドウ：aspect-[4/3] を消して h-auto に変更 */}
            <div className="terminal-container w-full max-w-5xl h-auto bg-[#2D2D2D] rounded-xl shadow-2xl overflow-hidden flex flex-col border border-white/10">

              {/* 中身のコンテナ：flex-1 と overflow-y-auto を消す */}
              <div className="p-4 md:p-8 h-auto custom-scrollbar">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#4FC3F7] font-mono">
                  &gt; <TypingText text={selectedProject.name} />
                </h3>
                {selectedProject.demos?.[0]?.externalLink && (
                  <a
                    href={selectedProject.demos[0].externalLink}
                    target="_blank"
                    rel="noopener noreferrer" // セキュリティのために追加を推奨
                    className="inline-flex items-center gap-2 text-sm md:text-xs text-white font-mono opacity-70 hover:opacity-100 transition-opacity decoration-slate-500 underline-offset-4 hover:underline external-link"
                  >
                    <span>{selectedProject.demos[0].externalLink}</span>
                    <FaExternalLinkAlt className="text-[10px] text-[#4FC3F7]" />
                  </a>
                )}

                <div className="mb-4">
                  <p className="text-slate-300 font-mono text-sm leading-relaxed">
                    <span className="text-green-400">description:</span> {selectedProject.description}
                  </p>
                </div>
                
                {/* デモセクション：ここが伸びることで外枠も一緒に伸びる */}
                <div className="space-y-16">
                  {selectedProject.demos?.map((demo, index) => (
                    <div key={index} className="space-y-6">
                      {/* ...タイトルや動画、リストの中身はそのまま... */}
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg md:text-xl font-bold text-white leading-tight">
                          {demo.title}
                        </h4>

                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* 動画部分：ここも aspect-[16/9] であればその高さ分だけ確保される */}
                        <div className="relative aspect-[16/9] bg-black rounded shadow-lg overflow-hidden border border-white/5">
                          <video src={demo.videoUrl} className="w-full h-full object-cover" loop playsInline muted autoPlay controls />
                        </div>

                        {/* リスト部分 */}
                        <div className="space-y-6 font-mono">
                          {demo.features.map((feature, fIndex) => (
                            <div key={fIndex} className="relative pb-4 border-b border-white/10 last:border-0">
                              {/* ...タグやテキストの中身... */}
                              <div className="mb-2">
                                <span className="px-3 py-0.5 bg-slate-100 text-[#444] text-[10px] rounded-full font-bold uppercase">
                                  {feature.tag}
                                </span>
                              </div>
                              <div className="flex items-start gap-3 text-slate-200">
                                <span>•</span>
                                <p className="text-sm md:text-base leading-relaxed">{feature.text}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>

        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}