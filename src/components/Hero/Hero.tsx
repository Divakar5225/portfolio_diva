import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import hero from "../../assets/divakar-profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-white min-h-screen pt-[68px] overflow-hidden"
    >

      {/* Decorative circles */}

      <div className="absolute top-28 left-[8%] w-4 h-4 border border-[#ff482e] rounded-full" />

      <div className="absolute top-40 right-[14%] w-3 h-3 border border-[#ff482e] rounded-full" />

      <div className="absolute bottom-24 left-[12%] w-6 h-6 border border-[#ff482e] rounded-full" />

      <div className="section-container min-h-[calc(100vh-68px)] flex items-center">

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center py-16">

          {/* ============================
              LEFT
          ============================ */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >

            <p className="text-sm text-gray-500 mb-3">
              Hello, I'm
            </p>

            <div className="w-10 h-1 bg-[#ff482e] mb-5" />

            <h1 className="font-['Space_Grotesk'] text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] text-[#151515]">
              Divakar
              <br />
              <span className="text-[#ff482e]">
                Guru
              </span>
            </h1>

            <h2 className="mt-6 text-xl lg:text-2xl font-semibold text-[#252525]">
              Medical Device Design Engineer
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
              MS Research Scholar at IIT Madras focused on medical device design and
              biomedical engineering. I bring human factors, ergonomics, and
              clinical workflows into product development—from CAD to prototyping.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-3">

              <Link to="/projects" className="btn-primary">
                View Projects
                <FaArrowRight size={11} />
              </Link>

              <Link to="/contact" className="btn-outline">
                Contact Me
              </Link>

            </div>

            {/* Social */}

            <div className="mt-8 flex items-center gap-5">

              <span className="text-xs uppercase tracking-wider text-gray-400">
                Follow me
              </span>

              <a
                href="https://github.com/Divakar5225"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-gray-700 hover:text-[#ff482e] transition"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="mailto:divakarguru5225@gmail.com"
                aria-label="Email Divakar"
                className="text-gray-700 hover:text-[#ff482e] transition"
              >
                <FaEnvelope size={17} />
              </a>

            </div>

          </motion.div>


          {/* ============================
              RIGHT
          ============================ */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >

            <div className="relative w-[300px] sm:w-[360px] lg:w-[440px] aspect-square">

              {/* Main orange circle */}

              <div className="absolute inset-[7%] rounded-full bg-[#ff482e]" />

              {/* Light pink circle */}

              <div className="absolute inset-[13%] rounded-full bg-[#ffc2b9]" />

              {/* Photo */}

              <div className="absolute inset-[17%] rounded-full overflow-hidden bg-white border-[7px] border-white shadow-xl">

                <img
                  src={hero}
                  alt="Divakar Guru"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Bottom label */}

              <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 bg-white shadow-lg px-5 py-3 whitespace-nowrap">

                <p className="text-[10px] font-medium tracking-wide text-gray-500">
                  MEDICAL DEVICE • RESEARCH • DESIGN
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;




