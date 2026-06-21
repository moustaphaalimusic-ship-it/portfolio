import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { ArrowUpRight, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AutoMarquee } from './AutoMarquee';

interface WorkProps {
  projects: Project[];
}

export default function Work({ projects }: WorkProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-black">
      <div className="container mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.4em] opacity-40 mb-4 block font-bold font-display">
            Selected Projects
          </span>
          <h2 className="text-6xl md:text-8xl font-display tracking-tighter text-white mb-6">Portfolio</h2>
          <p className="text-white/60 max-w-md mx-auto text-sm leading-relaxed font-sans text-center">
            A collection of projects showcasing my experience in advertising, branding, social media design, and visual communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            if ((project.id === 'twitch' || project.id === 'nexura') && project.images) {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="col-span-1 md:col-span-2 lg:col-span-3 mt-8 mb-8 overflow-hidden"
                >
                  <div className="flex flex-col justify-start items-start mb-8 gap-4 px-2">
                    <div>
                      <h3 className="text-5xl md:text-6xl font-display mb-2 text-white">{project.title}</h3>
                      <p className="text-sm opacity-50 font-medium font-sans uppercase tracking-widest mt-2 mb-4">
                        {project.category} • {project.industry || 'Multi-Brand'}
                      </p>
                    </div>
                    <p className="max-w-3xl text-white/70 font-sans text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <AutoMarquee images={project.images} reverse={project.id === 'nexura'} />
                </motion.div>
              );
            }

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-brand-gray mb-6 rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
                      <ArrowUpRight className="w-8 h-8" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-2xl mb-1 group-hover:text-white/90 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm opacity-50 font-medium font-sans uppercase tracking-widest">
                      {project.category} • {project.industry || 'Multi-Brand'}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8 cursor-pointer"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-brand-dark rounded-3xl overflow-hidden shadow-2xl border border-white/5 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-md border border-white/10"
                id="close-modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 h-full overflow-y-auto lg:overflow-hidden">
                {/* Images Section */}
                <div className="bg-brand-gray/50 h-[50vh] lg:h-[90vh] overflow-y-auto p-4 md:p-8 space-y-6 scrollbar-hide">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-black">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {selectedProject.images?.map((img, i) => (
                    <div key={i} className="aspect-[4/5] rounded-2xl overflow-hidden bg-black">
                      <img
                        src={img}
                        alt={`${selectedProject.title} detail ${i}`}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/40 mb-6 block">
                    Project Case Study
                  </span>
                  <h2 className="text-4xl md:text-6xl font-display tracking-tighter mb-8 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h2>

                  <div className="space-y-8 mb-12">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-mono">Industry</h4>
                      <p className="text-lg text-white/80">{selectedProject.industry || 'General Creative'}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-mono">Overview</h4>
                      <p className="text-white/70 leading-relaxed text-lg">
                        {selectedProject.description}
                      </p>
                    </div>
                    {selectedProject.highlights && (
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-4 font-mono">Core Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.highlights.map((h, i) => (
                            <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-xs font-medium text-white/60 border border-white/10">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <button className="flex items-center gap-3 text-white font-sans font-bold group">
                    <span className="text-sm tracking-widest uppercase">Next Project</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
