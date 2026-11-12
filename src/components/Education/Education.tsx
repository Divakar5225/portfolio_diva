const Education = () => {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h4 className="text-cyan-400 uppercase tracking-[5px]">
          Education
        </h4>

        <h2 className="text-5xl font-black mt-3">
          Academic Journey
        </h2>

        <div className="mt-16 space-y-10">

          <div className="bg-slate-900 rounded-2xl p-8">

            <h3 className="text-2xl font-bold">
              Master of Science (MS)
            </h3>

            <p className="text-cyan-400 mt-2">
              IIT Madras
            </p>

            <p className="text-slate-400 mt-3">
              Applied Mechanics and Biomedical Engineering
            </p>

          </div>

          <div className="bg-slate-900 rounded-2xl p-8">

            <h3 className="text-2xl font-bold">
              Bachelor of Engineering
            </h3>

            <p className="text-cyan-400 mt-2">
              Biomedical Engineering
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
