import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function Videos() {
  const videoProjects = [
    { title: 'Motion Graphics Reel', category: 'Showreel', duration: '1:30' },
    { title: 'Social Media Ad Reel', category: 'Advertising', duration: '0:45' },
    { title: 'Product Launch Intro', category: 'Motion Design', duration: '1:00' }
  ];

  return (
    <section id="videos" className="py-24 px-6 md:px-12 bg-brand-dark">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest opacity-50 mb-4 block font-medium font-sans">
              Motion & Motion Graphics
            </span>
            <h2 className="text-5xl md:text-7xl tracking-tighter">VIDEOS</h2>
          </div>
          <p className="text-white/60 max-w-sm text-sm leading-relaxed mb-2 font-sans">
            A collection of promotional videos, motion graphics, social media reels, and creative visual content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoProjects.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-video bg-brand-gray/50 flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden rounded-xl border border-white/5"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-500 z-10">
                <Play className="w-6 h-6 fill-current" />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl mb-1">{video.title}</h3>
                <p className="text-xs font-sans uppercase tracking-widest opacity-60">{video.category} • {video.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
