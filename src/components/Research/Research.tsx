const Research = () => {
  return (
    <section
      id="research"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h4 className="text-cyan-400 uppercase tracking-[5px] font-semibold">
          Research
        </h4>

        <h2 className="text-5xl font-black mt-3">
          Research Interests
        </h2>

        <p className="mt-6 text-slate-400 max-w-4xl leading-8">
          My research focuses on bridging mechanical engineering,
          biomedical engineering and emerging digital technologies
          to develop innovative healthcare solutions through
          engineering design, simulation and rapid prototyping.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">

            <h3 className="text-2xl font-bold text-cyan-400">
              Medical Device Design
            </h3>

            <ul className="mt-6 list-disc ml-6 space-y-3 text-slate-300">
              <li>Human-centered medical device development</li>
              <li>Design for manufacturability</li>
              <li>Rapid prototyping</li>
              <li>Clinical problem solving</li>
              <li>Product validation</li>
            </ul>

          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">

            <h3 className="text-2xl font-bold text-cyan-400">
              Additive Manufacturing
            </h3>

            <ul className="mt-6 list-disc ml-6 space-y-3 text-slate-300">
              <li>Medical 3D printing</li>
              <li>Metal additive manufacturing</li>
              <li>Ceramic additive manufacturing</li>
              <li>Design for Additive Manufacturing (DfAM)</li>
              <li>Patient-specific implants</li>
            </ul>

          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">

            <h3 className="text-2xl font-bold text-cyan-400">
              Biomedical Engineering
            </h3>

            <ul className="mt-6 list-disc ml-6 space-y-3 text-slate-300">
              <li>Healthcare technologies</li>
              <li>Biomechanics</li>
              <li>Biomedical instrumentation</li>
              <li>Medical imaging applications</li>
              <li>Digital healthcare systems</li>
            </ul>

          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">

            <h3 className="text-2xl font-bold text-cyan-400">
              Artificial Intelligence
            </h3>

            <ul className="mt-6 list-disc ml-6 space-y-3 text-slate-300">
              <li>Medical AI</li>
              <li>Biomedical signal processing</li>
              <li>Machine learning applications</li>
              <li>Time-series analysis</li>
              <li>Engineering data analytics</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Research;