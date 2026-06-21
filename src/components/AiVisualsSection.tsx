import { motion, AnimatePresence } from "motion/react";
import { aiVisuals } from "../data";
import { useState, useEffect } from "react";
import { X, ChevronRight, Maximize2 } from "lucide-react";
import { AutoMarquee } from "./AutoMarquee";

function AiVisualCard({ visual, index, onClick }: { visual: typeof aiVisuals[0]; index: number; onClick: () => void }) {
  const displayTitle = visual.title === 'Carmour' ? 'Carmour Branding' : visual.title === 'Benzwa' ? 'Benzwa Visuals' : visual.title;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="w-full aspect-[4/5] relative"
      onClick={onClick}
    >
      <motion.div
        className="w-full h-full rounded-2xl border border-white/10 bg-brand-gray/40 backdrop-blur-md p-3 relative overflow-hidden cursor-pointer shadow-2xl"
        whileHover={{ scale: 1.02, y: -6 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden group">
          <img
            src={visual.image}
            alt={visual.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Overlays / design frames */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

          {/* Hover overlay: blur + center icon */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center pointer-events-none">
            <div className="p-4 rounded-full bg-white text-black scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
              <Maximize2 className="w-6 h-6" />
            </div>
          </div>

          {/* Glass tag */}
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-left pointer-events-none transform">
            <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400">Featured Work</span>
            <h3 className="text-sm font-semibold text-white mt-1 uppercase tracking-wider font-serif">
              {displayTitle}
            </h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function AiVisualsSection() {
  const [selectedVisual, setSelectedVisual] = useState<typeof aiVisuals[0] | null>(null);

  useEffect(() => {
    if (selectedVisual) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedVisual]);

  return (
    <section id="ai-visuals" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.4em] opacity-40 mb-4 block font-bold font-display">Future Laboratory</span>
          <h2 className="text-6xl md:text-8xl font-display tracking-tighter text-white">AI VISUALS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {aiVisuals.map((visual, index) => {
            const isCustomLayout = visual.id === 'toyota' || visual.id === 'ciao';

            // Marquee layout for Chevrolet
            if (visual.id === 'chevrolet') {
              return (
                <motion.div
                  key={visual.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="col-span-1 md:col-span-2 mt-8 mb-8 overflow-hidden"
                >
                  <div className="flex flex-col justify-start items-start mb-8 gap-4 px-2">
                    <div>
                      <h3 className="text-5xl md:text-6xl font-display mb-2 text-white">{visual.title}</h3>
                      <p className="text-sm opacity-50 font-medium font-sans uppercase tracking-widest mt-2 mb-4">
                        AI Visuals
                      </p>
                    </div>
                    <p className="max-w-3xl text-white/70 font-sans text-sm md:text-base leading-relaxed">
                      {visual.description}
                    </p>
                  </div>
                  <AutoMarquee
                    images={visual.visuals}
                    onImageClick={(src) => setSelectedVisual({ ...visual, image: src })}
                  />
                </motion.div>
              );
            }

            if (isCustomLayout) {
              const isToyota = visual.id === 'toyota';
              const verticalCards = isToyota
                ? visual.visuals.filter(img => img.toLowerCase().includes('carousel'))
                : visual.visuals.filter(img => !img.toLowerCase().includes('cover') && !img.toLowerCase().includes('banner')).slice(0, 4);
              return (
                <motion.div
                  key={visual.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="col-span-1 md:col-span-2 group relative flex flex-col gap-6 w-full mt-12 mb-12"
                >
                  {/* Wide Banner */}
                  <div
                    className="w-full overflow-hidden rounded-3xl relative cursor-pointer"
                    onClick={() => setSelectedVisual(visual)}
                  >
                    <img
                      src={visual.image}
                      alt={visual.title}
                      className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="p-4 rounded-full bg-white text-black">
                        <Maximize2 className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Title and description */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                        {visual.title}
                      </h3>
                      <p className="text-zinc-500 leading-relaxed text-lg">
                        {visual.description}
                      </p>
                    </div>
                  </div>

                  {/* 4 Vertical Cards Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                    {verticalCards.map((img, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -8 }}
                        className="aspect-[3/4.2] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 relative cursor-pointer group/card"
                        onClick={() => setSelectedVisual({ ...visual, image: img })}
                      >
                        <img
                          src={img}
                          alt={`${visual.title} detail ${i}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[1px]">
                          <Maximize2 className="w-5 h-5 text-white" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            }

            return (
              <AiVisualCard
                key={visual.id}
                visual={visual}
                index={index}
                onClick={() => setSelectedVisual(visual)}
              />
            );
          })}

        </div>
      </div>

      <AnimatePresence>
        {selectedVisual && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/98 p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedVisual(null)}
          >
            <button className="absolute top-8 right-8 z-20 text-white opacity-50 hover:opacity-100 transition-opacity">
              <X className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-7xl h-full flex flex-col items-center justify-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex-1 relative overflow-hidden rounded-3xl bg-black/80">
                <img
                  src={selectedVisual.image}
                  className="w-full h-full object-contain rounded-3xl"
                  alt={selectedVisual.title}
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full h-1/4 flex justify-center gap-4 overflow-x-auto scrollbar-hide p-2">
                {selectedVisual.visuals.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0 h-full rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-black/80"
                    onClick={() => {
                      const newVisual = { ...selectedVisual, image: img };
                      setSelectedVisual(newVisual);
                    }}
                  >
                    <img
                      src={img}
                      className="h-full w-auto object-contain rounded-2xl"
                      alt="Detail"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedVisual.title}</h2>
                <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">{selectedVisual.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
