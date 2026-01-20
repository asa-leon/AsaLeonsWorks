import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    // 全体の背景色とフォント設定のみ
    <div className="flex min-h-screen bg-[#DDE7E5] text-slate-800 font-sans">
      {children}
    </div>
  );
};

export default Layout;