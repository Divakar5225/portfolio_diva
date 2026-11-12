import {
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Let's Work Together
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg leading-8">
            I am open to opportunities involving medical device design,
            biomedical engineering, additive manufacturing, mechanical design,
            research and product development.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8">

            <h3 className="text-2xl font-bold text-cyan-400">
              Contact Information
            </h3>

            <p className="mt-5 text-slate-300 leading-7">
              If you would like to discuss a research project, engineering
              project, collaboration or professional opportunity, feel free
              to reach out.
            </p>

            <div className="mt-8 space-y-5">

              <a
                href="mailto:divakarguru5225@gmail.com"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition"
              >
                <FaEnvelope className="text-xl" />
                <span>divakarguru5225@gmail.com</span>
              </a>

              <a
                href="https://github.com/Divakar5225"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>

            </div>
          </div>

          {/* Right */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8">

            <h3 className="text-2xl font-bold text-cyan-400">
              Areas I Can Help With
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "Medical Device Design",
                "Mechanical Design",
                "Additive Manufacturing",
                "Biomedical Engineering",
                "CAD & Reverse Engineering",
                "Rapid Prototyping",
                "Product Development",
                "Research & Development",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {item}
                </span>
              ))}

            </div>

            <a
              href="mailto:divakarguru5225@gmail.com"
              className="inline-block mt-10 rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition"
            >
              Send Me an Email
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

