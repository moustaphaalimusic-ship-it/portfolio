import { motion } from "motion/react";
import { User, Palette, Lightbulb, Zap } from "lucide-react";
import { getUrl } from "../data";

export function About() {
  const skills = [
    { icon: <Palette className="w-5 h-5" />, title: "Branding", desc: "Creating unique visual identities." },
    { icon: <Zap className="w-5 h-5" />, title: "Social Campaigns", desc: "High-impact digital marketing assets." },
    { icon: <Lightbulb className="w-5 h-5" />, title: "Product Advertising", desc: "Strategically driven design solutions." },
    { icon: <User className="w-5 h-5" />, title: "Visual Storytelling", desc: "Messaging through engaging visuals." },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">The Designer</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2 mb-8 tracking-tighter">About</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I am a graphic designer and visual storyteller dedicated to creating impactful visual experiences. 
              My expertise spans brand identity, social media campaigns, and creative visual communication.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-8">
              I help brands bridge the gap between their message and their audience through design that is 
              both aesthetically pleasing and strategically targeted to drive engagement and awareness.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                    {skill.icon}
                  </div>
                  <h4 className="text-white font-bold mb-1">{skill.title}</h4>
                  <p className="text-zinc-500 text-sm">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10 group">
              <img
                src={getUrl('Abo 3elwa/abo 3elwa.jpeg')}
                alt="Abo 3elwa"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
