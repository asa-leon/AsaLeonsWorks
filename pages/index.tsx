import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import { PORTFOLIO_DATA, MenuItem, ProjectDetail } from '../libs/types';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<MenuItem>(PORTFOLIO_DATA[0]);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail>(PORTFOLIO_DATA[0].items[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // カテゴリーが切り替わった時の処理を賢くする
  useEffect(() => {
    // 現在選択されているプロジェクトが、新しく選ばれたカテゴリーの中に存在するか確認
    const isProjectInCategory = selectedCategory.items.some(item => item.id === selectedProject.id && item.name === selectedProject.name);

    // 含まれていない場合（＝別の言語タブを押した時など）だけ、そのカテゴリの1番目を選択する
    if (!isProjectInCategory && selectedCategory.items.length > 0) {
      setSelectedProject(selectedCategory.items[0]);
    }
  }, [selectedCategory]); // selectedProjectは依存配列に入れないことでループを防ぐ

  // サイドバーやリストで項目を直接選ぶための関数
  const handleSelect = (category: MenuItem, project: ProjectDetail) => {
    setSelectedCategory(category);
    setSelectedProject(project);
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  return (
    <Layout>
      <div className="flex w-full min-h-screen relative">
        
        {/* --- サイドバー --- */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-white p-10 transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 md:flex md:shrink-0
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          <div className="flex flex-col gap-10 w-full">
            <h1 className="text-5xl font-black leading-[0.85] tracking-tighter uppercase">
              HIGA<br />KOSK'S<br />WORKS
            </h1>
            
            <nav className="space-y-8 overflow-y-auto">
              {PORTFOLIO_DATA.map((group) => (
                <div key={group.category}>
                  <h2 
                    className={`flex items-center text-xl font-bold mb-3 cursor-pointer transition-colors ${
                      selectedCategory.category === group.category ? "text-blue-600" : "hover:text-blue-400"
                    }`}
                    onClick={() => setSelectedCategory(group)}
                  >
                    <span className="mr-2 text-[10px]">{selectedCategory.category === group.category ? "▼" : "▶"}</span>
                    {group.category}
                  </h2>
                  <ul className="ml-4 pl-4 border-l-2 border-slate-200 space-y-2">
                    {group.items.map((item) => (
                      <li 
                        key={`${group.category}-${item.id}`} 
                        onClick={() => handleSelect(group, item)} // ここで両方更新
                        className={`text-base cursor-pointer transition-colors ${
                          selectedProject.name === item.name && selectedCategory.category === group.category
                            ? "text-blue-600 font-bold" 
                            : "text-slate-500 hover:text-blue-400"
                        }`}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* --- メインエリア --- */}
        <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
          {/* モバイルヘッダー */}
          <header className="md:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 shrink-0">
            <span className="font-black text-xl tracking-tighter">HIGA KOSK'S</span>
            <button onClick={() => setIsSidebarOpen(true)} className="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded">MENU</button>
          </header>

          {/* 上部タブ */}
          <nav className="flex bg-white border-b border-slate-200 overflow-x-auto shrink-0">
            {PORTFOLIO_DATA.map((group) => (
              <button
                key={group.category}
                onClick={() => setSelectedCategory(group)}
                className={`px-10 py-5 text-sm font-bold border-r border-slate-100 transition-all ${
                  selectedCategory.category === group.category ? "bg-[#DDE7E5]" : "text-slate-400 hover:bg-slate-50"
                }`}
              >
                {group.category}
              </button>
            ))}
          </nav>

          <main className="flex-1 p-12 overflow-y-auto space-y-8">
            <div className="font-mono text-[15px] leading-relaxed text-slate-700">
              <p className="opacity-50">higakosk@works ~ % welcome</p>
              <ul className="mt-4 space-y-1">
                {selectedCategory.items.map((item) => (
                  <li 
                    key={item.id} 
                    onClick={() => setSelectedProject(item)}
                    className={`cursor-pointer w-fit px-1 ${
                      selectedProject.name === item.name ? "bg-slate-800 text-white" : "underline"
                    }`}
                  >
                    {item.id}) {item.name}.
                  </li>
                ))}
              </ul>
            </div>

            {/* ターミナル */}
            <div className="w-full max-w-5xl aspect-video bg-[#2D2D2D] rounded-xl shadow-2xl flex flex-col border border-white/10 overflow-hidden">
              <div className="p-4 flex gap-2 bg-[#333] shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#4FC3F7]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FF80AB]"></div>
              </div>
              <div className="flex-1 p-10 text-white font-mono overflow-y-auto">
                 <h3 className="text-2xl font-bold mb-4 text-[#4FC3F7]">&gt; {selectedProject.name}</h3>
                 <p className="text-lg text-slate-300">{selectedProject.description}</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}