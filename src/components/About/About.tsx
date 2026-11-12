import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Cpu,
  Microscope,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h4 className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            About Me
          </h4>

          <h2 className="text-5xl font-black mt-3">
            Engineering Better Healthcare
          </h2>

          <p className="text-slate-300 mt-8 leading-8 text-lg max-w-4xl">
            I am an MS Research Scholar at IIT Madras specializing in
            Medical Device Design, Additive Manufacturing,
            Biomedical Engineering, CAD Development, Reverse Engineering,
            Product Design and Human-Centered Engineering.

            My work combines mechanical engineering, biomedical research and
            rapid prototyping to take ideas toward manufacturable products.
            Human factors shape how I approach a product: who will use it, the
            tasks and environments it must support, and the physical and
            cognitive demands involved. These considerations guide ergonomics,
            usability, workflow fit and prototype evaluation.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
          >

            <GraduationCap
              size={40}
              className="text-cyan-400"
            />

            <h3 className="text-xl font-bold mt-5">
              Education
            </h3>

            <p className="text-slate-400 mt-3">
              MS Research Scholar
              <br />
              IIT Madras
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
          >

            <Briefcase
              size={40}
              className="text-cyan-400"
            />

            <h3 className="text-xl font-bold mt-5">
              Industry
            </h3>

            <p className="text-slate-400 mt-3">
              Medical Device Design
              <br />
              Product Development
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
          >

            <Cpu
              size={40}
              className="text-cyan-400"
            />

            <h3 className="text-xl font-bold mt-5">
              Expertise
            </h3>

            <p className="text-slate-400 mt-3">
              CAD
              <br />
              Simulation
              <br />
              3D Printing
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
          >

            <Microscope
              size={40}
              className="text-cyan-400"
            />

            <h3 className="text-xl font-bold mt-5">
              Research
            </h3>

            <p className="text-slate-400 mt-3">
              Biomedical Devices
              <br />
              Additive Manufacturing
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
