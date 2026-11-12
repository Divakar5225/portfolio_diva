const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h4 className="text-cyan-400 uppercase tracking-[5px] font-semibold">
          Experience
        </h4>

        <h2 className="text-5xl font-black mt-3">
          Professional Experience
        </h2>

        <div className="mt-16 space-y-12">
          <article className="border-l-4 border-cyan-500 pl-8">
            <h3 className="text-3xl font-bold">
              Sports Science &amp; Excellence Project
            </h3>
            <p className="text-cyan-400 mt-2">
              Centre for Sports Science and Excellence · In collaboration with Sports Authority of India (SAI)
            </p>
            <p className="text-slate-400 mt-3 leading-8">
              Working on sports projects that bring together biomechanics,
              computer vision, and human-factors-based design to better
              understand and support people in sport.
            </p>
            <ul className="mt-5 list-disc ml-6 space-y-2 text-slate-300">
              <li>Biomechanics-informed sports science projects</li>
              <li>Computer vision applications for sports</li>
              <li>Human-factors-based design for athletes and practitioners</li>
            </ul>
          </article>

          <article className="border-l-4 border-cyan-500 pl-8">
            <h3 className="text-3xl font-bold">
              Project Associate
            </h3>
            <p className="text-cyan-400 mt-2">
              IIT Madras · March 2023–Present
            </p>
            <p className="text-slate-400 mt-3 leading-8">
              Research and development across medical devices, biomedical
              engineering, additive manufacturing, CAD, simulation, and
              product prototyping.
            </p>
            <ul className="mt-5 list-disc ml-6 space-y-2 text-slate-300">
              <li>Medical device product development</li>
              <li>3D printing research and prototyping</li>
              <li>CAD design using Fusion 360</li>
              <li>Mechanical testing, validation, and technical documentation</li>
            </ul>
          </article>

          <article className="border-l-4 border-cyan-500 pl-8">
            <h3 className="text-3xl font-bold">
              Application Engineer &amp; 3D Printer Developer
            </h3>
            <p className="text-cyan-400 mt-2">
              Next Generation 3D Printers (Nexgen 3D) · September 2021–February 2023
            </p>
            <p className="text-slate-400 mt-3 leading-8">
              Worked across medical and dental 3D-printing applications,
              industrial printer development, engineering support, and
              additive-manufacturing training.
            </p>
            <ul className="mt-5 list-disc ml-6 space-y-2 text-slate-300">
              <li>Application engineering for medical and dental 3D-printing workflows</li>
              <li>Designed and developed industrial FDM printers, including a 300 × 300 × 450 mm build-volume machine</li>
              <li>Built a compact printer that reduced material use by 30% while maintaining stability; tested and delivered it to a client</li>
              <li>Supported printer assembly, service, maintenance, testing, calibration, and quality checks</li>
              <li>Conducted workshops and mentored students and professionals in additive manufacturing</li>
            </ul>
          </article>

          <article className="border-l-4 border-cyan-500 pl-8">
            <h3 className="text-3xl font-bold">
              Design &amp; Development Engineer
            </h3>
            <p className="text-cyan-400 mt-2">
              Medical Device Industry
            </p>
            <p className="text-slate-400 mt-3 leading-8">
              Contributed to human-safety device and product development,
              operator-safety systems, and eye-tracking product design.
            </p>
            <ul className="mt-5 list-disc ml-6 space-y-2 text-slate-300">
              <li>Human-safety device and product development</li>
              <li>Operator-safety system design</li>
              <li>Eye-tracking product design</li>
              <li>CAD modelling, prototyping, design validation, and manufacturing support</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
