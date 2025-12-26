// src/data/mockData.ts
import { StudyTask } from "../types";

export const initialSchedule: StudyTask[] = [
  {
    date: "2025-12-26",
    part: "PART 01. 안전관리론",
    title: "하인리히/버드 재해 구성 비율 및 중대재해 정의",
    status: "in-progress",
  },
  {
    date: "2025-12-27",
    part: "PART 01. 안전관리론",
    title: "재해조사 순서 및 도수율/강도율 계산 공식",
    status: "todo",
  },
  // ... 나중에 1월 31일까지 확장
];
