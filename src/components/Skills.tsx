import { motion } from 'motion/react';
import { skills } from '../data';

export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black border-y border-white/5">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-6xl tracking-tighter mb-12">SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest opacity-40 mb-6 font-bold font-sans">DESIGN EXPERTISE</h3>
              <ul className="space-y-4">
                {skills.design.map((skill, i) => (
                  <motion.li 
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex justify-between items-center py-2 border-b border-white/5 text-lg"
                  >
                    {skill}
                    <span className="w-1.5 h-1.5 rounded-full bg-white opacity-20" />
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest opacity-40 mb-6 font-bold font-sans">SOFTWARE</h3>
              <ul className="space-y-4">
                {skills.software.map((skill, i) => (
                  <motion.li 
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex justify-between items-center py-2 border-b border-white/5 text-lg"
                  >
                    {skill}
                    <span className="w-1.5 h-1.5 rounded-full bg-white opacity-20" />
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="rounded-2xl relative overflow-hidden group">
            <img
              src="https://qwsgihibnntwbgfovjao.supabase.co/storage/v1/object/public/works/Abo%203elwa/My-photos.png"
              alt="Moustapha"
              className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
