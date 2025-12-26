// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* 1. 상단 타이틀 섹션: 전체 너비 사용 */}
        <section className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Safety Roadmap
          </h2>
          <p className="mt-2 text-slate-500">
            12월 26일 시작 — 1월 31일 합격 목표 (구민사 산업안전기사)
          </p>
        </section>

        {/* 2. 하단 컨텐츠 섹션: 그리드 배치 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* 왼쪽: 달력 (2컬럼) */}
          <div className="lg:col-span-2">
            <Calendar />
          </div>

          {/* 오른쪽: 상세 정보 패널 (1컬럼) */}
          <aside className="sticky top-24 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm ring-1 ring-slate-900/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-slate-800">
                  Today's Focus
                </h3>
                <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-blue-200 transition-colors">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                    Part 01. 안전관리론
                  </p>
                  <p className="text-sm font-bold text-slate-700 leading-snug">
                    하인리히/버드 재해 구성 비율 및 중대재해 정의
                  </p>
                </div>

                <div className="space-y-2">
                  <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all active:scale-[0.98]">
                    오늘의 강의 시청
                  </button>
                  <button className="w-full py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
                    학습 로그 기록 (JSON)
                  </button>
                </div>
              </div>
            </div>

            {/* 진척도 카드 추가 (옵션) */}
            <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-lg">
              <p className="text-xs font-medium text-slate-400 uppercase">
                Current Progress
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-black">2%</span>
                <span className="text-slate-400 text-sm">completed</span>
              </div>
              <div className="mt-4 h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[2%] shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
