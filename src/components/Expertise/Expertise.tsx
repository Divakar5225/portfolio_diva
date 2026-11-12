import { motion } from "framer-motion";
import {
  Cpu,
  Box,
  FlaskConical,
  BrainCircuit,
  Wrench,
  MonitorCog,
  UsersRound,
} from "lucide-react";

const skills = [
  {
    icon: Cpu,
    title: "CAD & Product Design",
    desc: "Fusion 360, SolidWorks, AutoCAD, Reverse Engineering",
  },
  {
    icon: Box,
    title: "Additive Manufacturing",
    desc: "FDM, Resin, Metal & Ceramic 3D Printing, DfAM",
  },
  {
    icon: MonitorCog,
    title: "Simulation",
    desc: "ANSYS, Fusion 360 Simulation, FEA",
  },
  {
    icon: FlaskConical,
    title: "Medical Devices",
    desc: "Biomedical Product Development & Prototyping",
  },
  {
    icon: Wrench,
    title: "Embedded Systems",
    desc: "Arduino, ESP32, Sensors & Automation",
  },
  {
    icon: BrainCircuit,
    title: "AI & Research",
    desc: "Python, Medical AI, Data Analysis",
  },
  {
    icon: UsersRound,
    title: "Human Factors & Ergonomics",
    desc: "Designing around user needs, clinical tasks, physical and cognitive demands, usability, and accessibility.",
  },
];

const Expertise = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h4 className="text-cyan-400 uppercase tracking-[5px] font-semibold text-center">
          Engineering Expertise
        </h4>

        <h2 className="text-5xl font-black text-center mt-3">
          Technologies & Domains
        </h2>

        <p className="text-slate-400 text-center max-w-3xl mx-auto mt-6 leading-8">
          My expertise spans medical device engineering, advanced CAD,
          additive manufacturing, embedded systems, biomedical research, simulation, human factors,
          and product development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-cyan-500 transition-all"
              >

                <Icon
                  size={42}
                  className="text-cyan-400"
                />

                <h3 className="text-2xl font-bold mt-6">
                  {skill.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {skill.desc}
                </p>

              </motion.div>

            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Expertise;
