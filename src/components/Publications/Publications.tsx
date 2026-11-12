const publications = [
  {
    title:
      "EEG-Based Alzheimer's Disease Detection Using Nonlinear Time-Series Analysis",
    type: "Research Project",
    status: "In Progress",
    description:
      "Research focused on nonlinear feature extraction, dynamical systems, machine learning and biomedical signal processing for Alzheimer's disease stage detection.",
  },

  {
    title:
      "Medical Device Design and Smart Infusion Pump Development",
    type: "Engineering Project",
    status: "Completed",
    description:
      "Design, simulation and prototype development of a smart infusion pump integrating embedded control and biomedical engineering principles.",
  },

  {
    title:
      "Advanced Additive Manufacturing for Biomedical Applications",
    type: "Research Interest",
    status: "Ongoing",
    description:
      "Research involving metal, ceramic and polymer additive manufacturing, design optimization and patient-specific medical devices.",
  },

  {
    title:
      "Patient-Specific Medical Implant Design Using Additive Manufacturing",
    type: "Research Interest",
    status: "Future Work",
    description:
      "Exploration of implant design, topology optimization, biocompatible materials and manufacturing workflows for personalized healthcare.",
  },
];

const Publications = () => {
  return (
    <section
      id="publications"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h4 className="text-cyan-400 uppercase tracking-[5px] font-semibold">
          Publications & Research
        </h4>

        <h2 className="text-5xl font-black mt-3">
          Publications, Papers & Ongoing Research
        </h2>

        <p className="mt-6 max-w-4xl text-slate-400 leading-8">
          My research activities focus on biomedical engineering,
          medical device innovation, additive manufacturing,
          artificial intelligence and product development. This section
          includes completed work, ongoing research and future publication
          objectives.
        </p>

        <div className="space-y-8 mt-16">

          {publications.map((paper, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
            >

              <div className="flex flex-wrap justify-between gap-4">

                <div>

                  <h3 className="text-2xl font-bold">
                    {paper.title}
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    {paper.type}
                  </p>

                </div>

                <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg h-fit">
                  {paper.status}
                </span>

              </div>

              <p className="mt-6 text-slate-300 leading-8">
                {paper.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Publications;