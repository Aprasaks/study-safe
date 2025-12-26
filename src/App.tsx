import React, { useState } from "react";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import scheduleData from "./data/schedule.json";
import { StudyTask } from "./types";

function App() {
  const [selectedDate, setSelectedDate] = useState("2025-12-26");

  // schedule.json 데이터에서 선택된 날짜의 태스크 검색
  const currentTask = (scheduleData as StudyTask[]).find(
    (task) => task.date === selectedDate
  ) || {
    date: selectedDate,
    part: "자율 학습",
    title: "지정된 강의가 없습니다. 복습을 진행하세요.",
    status: "todo",
    videoUrl: "", // 예외 처리를 위한 빈 값
  };

  // 진척도 계산 (완료된 태스크 개수 / 전체 태스크 개수)
  const totalTasks = scheduleData.length;
  const completedTasks = scheduleData.filter((t) => t.status === "done").length;
  const progressPercent = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* 1. 상단 타이틀 섹션 */}
        <section className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Safety Roadmap
          </h2>
          <p className="mt-2 text-slate-500">
            12월 26일 시작 — 1월 31일 합격 목표 (구민사 산업안전기사 24강)
          </p>
        </section>

        {/* 2. 메인 컨텐츠 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* 왼쪽: 달력 영역 */}
          <div className="lg:col-span-2">
            <Calendar
              onDateSelect={setSelectedDate}
              selectedDate={selectedDate}
            />
          </div>

          {/* 오른쪽: 상세 정보 패널 */}
          <aside className="sticky top-24 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm ring-1 ring-slate-900/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-slate-800">
                  Task: {selectedDate}
                </h3>
                {currentTask.status === "done" ? (
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                    Completed
                  </span>
                ) : (
                  <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                )}
              </div>

              <div className="space-y-4">
                {/* 강의 정보 카드 */}
                <div className="p-4 bg-slate-50 rounded-xl border border-blue-100 group hover:border-blue-200 transition-colors">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                    {currentTask.part}
                  </p>
                  <p className="text-sm font-bold text-slate-700 leading-snug">
                    {currentTask.title}
                  </p>
                </div>

                {/* 버튼 그룹 */}
                <div className="space-y-2">
                  <button
                    onClick={() =>
                      currentTask.videoUrl &&
                      window.open(currentTask.videoUrl, "_blank")
                    }
                    disabled={!currentTask.videoUrl}
                    className={`w-full py-3 rounded-xl font-bold text-sm transition-all active:scale-[0.98] ${
                      currentTask.videoUrl
                        ? "bg-slate-900 text-white hover:bg-slate-800"
                        : "bg-slate-200 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    오늘의 강의 시청
                  </button>

                  {/* 요청하신 대로 텍스트만 '학습노트 보기'로 변경했습니다 */}
                  <button className="w-full py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
                    학습노트 보기
                  </button>
                </div>
              </div>
            </div>

            {/* 실시간 진척도 카드 */}
            <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-lg">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-tighter">
                Overall Progress
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-black">{progressPercent}%</span>
                <span className="text-slate-400 text-sm">
                  {completedTasks} / {totalTasks} Lectures
                </span>
              </div>
              <div className="mt-4 h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
