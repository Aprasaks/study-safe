import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Props 타입을 깊은 계층 구조에 맞게 확장합니다.
interface StudyContentProps {
  part: string; // 예: "part1_safety_management"
  chapter: string; // 예: "ch01_accident_prevention"
  lecture: string; // 예: "01_safety_basics"
  section: string; // 예: "1_definition"
}

const StudyContent: React.FC<StudyContentProps> = ({
  part,
  chapter,
  lecture,
  section,
}) => {
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // 우리가 정한 public/data/lectures 구조에 맞춰 경로 생성
    const filePath = `/data/lectures/${part}/${chapter}/${lecture}/${section}.md`;

    fetch(filePath)
      .then((res) => {
        if (!res.ok) throw new Error("파일을 찾을 수 없습니다.");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setError(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, [part, chapter, lecture, section]); // 경로 요소가 하나라도 바뀌면 다시 로드

  if (error)
    return (
      <div className="p-10 text-red-500">
        데이터를 불러오는 중 오류가 발생했습니다.
      </div>
    );

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
      {/* prose: 기본 타이포그래피 스타일 적용
      prose-slate: 색감 설정
      prose-lg: 글자 크기 키움
      leading-relaxed: 줄간격을 시원하게 (v4에서 매우 잘 먹음)
    */}
      <article
        className="prose prose-slate prose-lg max-w-none leading-relaxed
      prose-headings:tracking-tight 
      prose-p:mb-6 
      prose-li:my-2
      prose-table:my-8"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default StudyContent;
