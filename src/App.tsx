import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-cyan-400">
            Divakar Guru
          </h1>

          <p className="mt-4 text-xl text-slate-300">
            Medical Device Engineer
          </p>

          <button className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-600">
            Portfolio Coming Soon
          </button>
        </div>
      </main>
    </>
  );
}

export default App;