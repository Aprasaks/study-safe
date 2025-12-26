import React, { useEffect, useState } from "react";

const ExamPortal = ({ chapterId }: { chapterId: string }) => {
  const [examData, setExamData] = useState<any>(null);

  useEffect(() => {
    fetch(`/data/database/chapter-${chapterId}.json`)
      .then((res) => res.json())
      .then((data) => setExamData(data));
  }, [chapterId]);

  if (!examData) return null;

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-bold text-red-600 flex items-center gap-2">
        🚩 과년도 기출 핵심 분석
      </h3>
      {examData.exam_analysis.map((item: any, index: number) => (
        <div
          key={index}
          className="p-4 bg-red-50 rounded-xl border border-red-100"
        >
          <p className="font-bold text-slate-900">{item.topic}</p>
          <p className="text-sm text-red-700 mt-1">⚠️ 함정: {item.trap}</p>
          <p className="text-xs text-slate-500 mt-2 italic">
            {item.critical_data}
          </p>
        </div>
      ))}
    </div>
  );
};
