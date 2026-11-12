const certifications = [
  {
    title: "Medical Device Design & Development",
    organization: "Professional Training",
    status: "Core Competency",
    description:
      "Knowledge of medical device design process, product development lifecycle, regulatory awareness and engineering documentation.",
  },

  {
    title: "Additive Manufacturing",
    organization: "Engineering Practice",
    status: "Advanced",
    description:
      "Hands-on experience with polymer, resin, ceramic and metal additive manufacturing technologies for engineering and biomedical applications.",
  },

  {
    title: "CAD & Product Design",
    organization: "Engineering Tools",
    status: "Professional",
    description:
      "Advanced CAD modelling, assembly design, reverse engineering, engineering drawings and product development workflows.",
  },

  {
    title: "Finite Element Analysis (FEA)",
    organization: "Simulation",
    status: "Professional",
    description:
      "Structural analysis, design validation, simulation-driven design and engineering optimization using CAE software.",
  },

  {
    title: "Biomedical Engineering Research",
    organization: "Academic Research",
    status: "Ongoing",
    description:
      "Research involving medical devices, biomedical signal processing, AI applications and healthcare engineering.",
  },

  {
    title: "Python for Engineering Applications",
    organization: "Programming",
    status: "Applied",
    description:
      "Automation, engineering computation, data analysis, machine learning and AI-assisted engineering workflows.",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h4 className="text-cyan-400 uppercase tracking-[5px] font-semibold">
          Certifications & Learning
        </h4>

        <h2 className="text-5xl font-black mt-3">
          Professional Development
        </h2>

        <p className="mt-6 text-slate-400 max-w-4xl leading-8">
          Continuous learning plays a key role in my engineering journey.
          I regularly build expertise through academic research, industrial
          projects, engineering software, medical device development and
          emerging manufacturing technologies.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {certifications.map((item, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-2xl border border-slate-700 p-8"
            >

              <div className="flex justify-between items-start flex-wrap gap-4">

                <div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    {item.organization}
                  </p>

                </div>

                <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg">
                  {item.status}
                </span>

              </div>

              <p className="mt-6 text-slate-300 leading-8">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;