// src/components/Calendar.tsx
import React from "react";

// 1. Props 인터페이스 정의
interface CalendarProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
}

// 2. Props를 파라미터로 받음
function Calendar({ selectedDate, onDateSelect }: CalendarProps) {
  const decDates = [26, 27, 28, 29, 30, 31];
  const janDates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <h3 className="font-bold text-slate-700">Roadmap: Dec - Jan</h3>
        <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded">
          Sprint 1 Active
        </span>
      </div>

      <div className="grid grid-cols-7 gap-px bg-slate-200">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="bg-slate-50 p-2 text-center text-[10px] font-bold text-slate-400 uppercase"
          >
            {day}
          </div>
        ))}

        {/* 12월 날짜 */}
        {decDates.map((date) => {
          const fullDate = `2025-12-${date}`;
          const isSelected = selectedDate === fullDate;

          return (
            <div
              key={`dec-${date}`}
              onClick={() => onDateSelect(fullDate)}
              className={`bg-white min-h-20 p-2 transition-colors cursor-pointer hover:bg-slate-50 
                ${
                  isSelected
                    ? "ring-2 ring-inset ring-blue-500 bg-blue-50/30"
                    : ""
                }`}
            >
              <span
                className={`text-xs font-medium ${
                  isSelected ? "text-blue-600 font-bold" : "text-slate-400"
                }`}
              >
                12.{date}
              </span>
              {date === 26 && (
                <div className="mt-1 p-1 bg-green-100 text-[10px] text-green-700 rounded font-bold leading-tight text-center">
                  Start
                </div>
              )}
            </div>
          );
        })}

        {/* 1월 날짜 */}
        {janDates.map((date) => {
          // 한 자리 날짜 앞에 0 붙이기 (2026-01-01 형식)
          const formattedDay = String(date).padStart(2, "0");
          const fullDate = `2026-01-${formattedDay}`;
          const isSelected = selectedDate === fullDate;

          return (
            <div
              key={`jan-${date}`}
              onClick={() => onDateSelect(fullDate)}
              className={`bg-white min-h-20 p-2 transition-colors cursor-pointer border-t border-slate-100 hover:bg-slate-50
                ${
                  isSelected
                    ? "ring-2 ring-inset ring-blue-500 bg-blue-50/30"
                    : ""
                }`}
            >
              <span
                className={`text-xs font-bold ${
                  isSelected ? "text-blue-600" : "text-slate-700"
                }`}
              >
                {date}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
