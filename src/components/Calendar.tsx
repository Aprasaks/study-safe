// src/components/Calendar.tsx
import React from "react";

function Calendar() {
  // 12월 26일부터 1월 31일까지의 날짜 배열 생성 (단순화된 예시)
  const decDates = [26, 27, 28, 29, 30, 31];
  const janDates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* 달력 헤더 */}
      <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <h3 className="font-bold text-slate-700">Roadmap: Dec - Jan</h3>
        <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded">
          Sprint 1 Active
        </span>
      </div>

      {/* 달력 그리드 */}
      <div className="grid grid-cols-7 gap-px bg-slate-200">
        {/* 요일 표시 */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="bg-slate-50 p-2 text-center text-[10px] font-bold text-slate-400 uppercase"
          >
            {day}
          </div>
        ))}

        {/* 12월 날짜 (비활성화 느낌으로 처리 가능하지만 여기선 공부일이므로 강조) */}
        {decDates.map((date) => (
          <div
            key={`dec-${date}`}
            className="bg-white min-h-[80px] p-2 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <span className="text-xs font-medium text-slate-400">
              12.{date}
            </span>
            {date === 26 && (
              <div className="mt-1 p-1 bg-green-100 text-[10px] text-green-700 rounded font-bold leading-tight">
                Project Start!
              </div>
            )}
          </div>
        ))}

        {/* 1월 날짜 */}
        {janDates.map((date) => (
          <div
            key={`jan-${date}`}
            className="bg-white min-h-[80px] p-2 hover:bg-slate-50 transition-colors cursor-pointer border-t border-slate-100"
          >
            <span className="text-xs font-bold text-slate-700">{date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
