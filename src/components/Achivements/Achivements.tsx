const achievements = [
  {
    title: "MS Research Scholar",
    description:
      "Pursuing Master of Science at IIT Madras with a focus on Medical Device Design, Biomedical Engineering and Additive Manufacturing.",
  },
  {
    title: "Medical Device Development",
    description:
      "Contributed to the design, development, prototyping and validation of medical devices for healthcare applications.",
  },
  {
    title: "Advanced Additive Manufacturing",
    description:
      "Worked on polymer, ceramic and metal additive manufacturing processes including Design for Additive Manufacturing (DfAM).",
  },
  {
    title: "Biomedical AI Research",
    description:
      "Developed AI and signal processing workflows for biomedical data analysis, including EEG-based Alzheimer's disease research.",
  },
  {
    title: "Engineering Product Development",
    description:
      "Designed mechanical systems, prototypes and engineering solutions from concept through validation using CAD and simulation tools.",
  },
  {
    title: "Rapid Prototyping",
    description:
      "Built and evaluated prototypes using CAD, 3D printing and engineering testing workflows for product development.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h4 className="text-cyan-400 uppercase tracking-[5px] font-semibold">
          Achievements
        </h4>

        <h2 className="text-5xl font-black mt-3">
          Professional Highlights
        </h2>

        <p className="mt-6 text-slate-400 max-w-4xl leading-8">
          A snapshot of academic, engineering and research milestones that
          reflect my experience in product development, biomedical
          engineering and advanced manufacturing.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {achievements.map((item, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 transition"
            >

              <h3 className="text-2xl font-bold text-cyan-400">
                {item.title}
              </h3>

              <p className="mt-5 text-slate-300 leading-8">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;