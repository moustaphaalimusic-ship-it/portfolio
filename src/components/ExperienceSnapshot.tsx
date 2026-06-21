import { motion } from 'motion/react';
import { experience } from '../data';

export default function ExperienceSnapshot() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black">
      <div className="container mx-auto max-w-5xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] opacity-40 mb-4 block font-bold font-sans">
            Career
          </span>
          <h2 className="text-6xl md:text-8xl font-display tracking-tighter text-white">
            EXPERIENCE
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ x: 6 }}
                className="relative group"
              >

                {/* Card */}
                <div className="bg-white/3 border border-white/8 rounded-2xl p-8 group-hover:bg-white/6 group-hover:border-white/15 transition-all duration-400">

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                    <div>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.2 }}
                        className="text-3xl md:text-4xl font-display tracking-tight text-white mb-1"
                      >
                        {exp.role}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.3 }}
                        className="text-white/40 font-sans uppercase tracking-[0.25em] text-xs font-semibold"
                      >
                        {exp.company}
                      </motion.p>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.35 }}
                    className="text-white/60 font-sans leading-relaxed text-sm md:text-base mb-8"
                  >
                    {exp.description}
                  </motion.p>

                  {/* Tasks as chips */}
                  <div className="flex flex-wrap gap-3">
                    {exp.tasks.map((task, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.4 + j * 0.07 }}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 font-sans tracking-wide group-hover:border-white/20 group-hover:text-white/80 transition-all duration-300"
                      >
                        {task}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
