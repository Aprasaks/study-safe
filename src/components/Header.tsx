// src/components/Header.tsx
import React from "react";

function Header() {
  // 오늘 날짜 생성 (YYYY-MM-DD 형식)
  const today = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date())
    .replace(/\. /g, "-")
    .replace(/\./g, "");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* 로고 영역 */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            PASS PATH
          </h1>
        </div>

        {/* 날짜 정보 영역 (Today 추가) */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Today
            </span>
            <span className="text-sm font-black text-slate-700">{today}</span>
          </div>

          <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">
              Target Date
            </span>
            <span className="text-sm font-black text-slate-700">
              2026-01-31
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
