export interface StudyTask {
  date: string; // "2025-12-26" 형태
  part: string;
  title: string;
  status: "todo" | "in-progress" | "done";
}
