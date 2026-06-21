import { motion } from "motion/react";
import { additionalWorkImages } from "../data";
import { Maximize2, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { AutoMarquee } from "./AutoMarquee";

export function AdditionalWorkSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <section id="additional-work" className="py-24 px-6 md:px-12 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.4em] opacity-40 mb-4 block font-bold font-display">Creative Gallery</span>
          <h2 className="text-5xl md:text-7xl font-display tracking-tighter text-white">Additional Work</h2>
          <p className="mt-4 text-white/50 text-base max-w-2xl mx-auto">
            A curated selection of promotional and social media visuals crafted for diverse brands and occasions.
          </p>
        </div>

        <div className="w-full">
          <AutoMarquee
            images={additionalWorkImages}
            onImageClick={(src) => setSelectedImage(src)}
          />
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-md border border-white/10"
              >
                <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Expanded work"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
