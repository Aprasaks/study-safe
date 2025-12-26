import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* 달력 섹션이 들어올 곳 */}
        <div className="flex flex-col gap-8">
          <section>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Safety Roadmap
            </h2>
            <p className="mt-2 text-slate-500">
              구민사 산업안전기사 합격 프로젝트
            </p>
          </section>

          {/* Calendar Placeholder */}
          <div className="h-96 w-full rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center bg-white">
            <p className="text-slate-400 font-medium">
              Next Milestone: Calendar Component
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
