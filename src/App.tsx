// src/App.tsx 수정
import React, { useState } from "react";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import { initialSchedule } from "./data/mockData";
import { StudyTask } from "./types";

function App() {
  // 오늘 날짜를 기본 선택값으로 설정 (형식: YYYY-MM-DD)
  const [selectedDate, setSelectedDate] = useState("2025-12-26");

  // 선택된 날짜에 해당하는 태스크 찾기
  const currentTask = initialSchedule.find(
    (task) => task.date === selectedDate
  ) || {
    date: selectedDate,
    part: "휴식 또는 자율학습",
    title: "지정된 스케줄이 없습니다.",
    status: "todo",
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <section className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Safety Roadmap
          </h2>
          <p className="mt-2 text-slate-500">
            지정한 날짜를 클릭하여 상세 일정을 확인하세요.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            {/* Calendar에 날짜 선택 함수 전달 */}
            <Calendar
              onDateSelect={setSelectedDate}
              selectedDate={selectedDate}
            />
          </div>

          <aside className="sticky top-24 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm ring-1 ring-slate-900/5">
              <h3 className="font-bold text-lg text-slate-800 mb-4">
                Task: {selectedDate}
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-blue-100">
                  <p className="text-xs font-bold text-blue-600 uppercase mb-1">
                    {currentTask.part}
                  </p>
                  <p className="text-sm font-bold text-slate-700 leading-snug">
                    {currentTask.title}
                  </p>
                </div>
                {/* 버튼 등 나머지 UI 그대로 */}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
