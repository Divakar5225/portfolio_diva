const TechnicalSkills = () => {
  return (
    <section
      id="technical-skills"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h4 className="text-cyan-400 uppercase tracking-[5px] font-semibold">
          Technical Skills
        </h4>

        <h2 className="text-5xl font-black mt-3">
          Engineering Toolkit
        </h2>

        <p className="mt-6 text-slate-400 max-w-4xl leading-8">
          My technical expertise combines engineering design,
          biomedical research, manufacturing, programming,
          simulation and product development.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {/* CAD */}
          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400">
              CAD & Product Design
            </h3>

            <ul className="mt-5 space-y-2 text-slate-300">
              <li>Fusion 360</li>
              <li>SolidWorks</li>
              <li>AutoCAD</li>
              <li>FreeCAD</li>
              <li>Reverse Engineering</li>
              <li>Engineering Drawing</li>
            </ul>
          </div>

          {/* Simulation */}
          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400">
              Simulation & Analysis
            </h3>

            <ul className="mt-5 space-y-2 text-slate-300">
              <li>ANSYS Mechanical</li>
              <li>Fusion 360 Simulation</li>
              <li>Finite Element Analysis (FEA)</li>
              <li>Structural Analysis</li>
              <li>Mechanical Design Validation</li>
            </ul>
          </div>

          {/* Manufacturing */}
          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400">
              Manufacturing
            </h3>

            <ul className="mt-5 space-y-2 text-slate-300">
              <li>FDM 3D Printing</li>
              <li>Resin 3D Printing</li>
              <li>Metal Additive Manufacturing</li>
              <li>Ceramic 3D Printing</li>
              <li>DfAM</li>
              <li>Rapid Prototyping</li>
            </ul>
          </div>

          {/* Programming */}
          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400">
              Programming
            </h3>

            <ul className="mt-5 space-y-2 text-slate-300">
              <li>Python</li>
              <li>MATLAB</li>
              <li>Arduino</li>
              <li>ESP32</li>
              <li>Git & GitHub</li>
              <li>React (Learning)</li>
            </ul>
          </div>

          {/* Biomedical */}
          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400">
              Biomedical Engineering
            </h3>

            <ul className="mt-5 space-y-2 text-slate-300">
              <li>Medical Device Design</li>
              <li>Biomedical Instrumentation</li>
              <li>Product Development</li>
              <li>Clinical Engineering</li>
              <li>Human-Centered Design</li>
            </ul>
          </div>

          {/* Research */}
          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400">
              Research & Data Analysis
            </h3>

            <ul className="mt-5 space-y-2 text-slate-300">
              <li>Machine Learning</li>
              <li>Signal Processing</li>
              <li>EEG Analysis</li>
              <li>Scientific Writing</li>
              <li>Technical Documentation</li>
              <li>Literature Review</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;