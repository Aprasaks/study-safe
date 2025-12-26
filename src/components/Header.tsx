import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* 왼쪽: 로고 섹션 */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tighter">
            MyLLM
          </h1>
        </div>

        {/* 오른쪽: 현재 상태 (나중에 여기에 진척도 표시 가능) */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
              Target Date
            </span>
            <span className="text-sm font-bold text-slate-700">
              2026. 01. 31
            </span>
          </div>
          <div className="h-8 w-px bg-slate-200 mx-2"></div>
          <button className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white hover:bg-slate-700 transition-colors">
            Sprint 1
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
