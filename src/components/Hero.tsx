import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Download, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { projects, aiVisuals } from "../data";

const showcaseImages = [
  aiVisuals[1]?.image, // Carmour
  projects[1]?.images?.[0], // Nexoura (Artboard 1)
  aiVisuals[2]?.image, // Benzwa
].filter(Boolean);

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "MOUSTAPHA";

  // Typewriter/write effect
  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Image slideshow effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // 3D Card tilt effect
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    // Map to max 15 degrees rotation
    setRotateX(-y / 15);
    setRotateY(x / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black overflow-hidden pt-24 pb-16">
      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -15, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[130px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-400 uppercase border border-blue-400/20 rounded-full bg-blue-400/5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Graphic Designer & Visual Storyteller
            </span>

            <h1 className="text-6xl md:text-8xl text-white mb-6 tracking-tighter leading-none font-galsil normal-case flex items-center min-h-[90px] md:min-h-[120px]">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
                className="inline-block w-[3px] h-[50px] md:h-[80px] bg-blue-500 ml-2 align-middle"
              />
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed max-w-2xl">
              Creating impactful visual experiences through branding, social media campaigns, product advertising, and creative visual communication.
            </p>

            <p className="text-gray-400 mb-10 max-w-xl text-sm md:text-base border-l-2 border-brand-gray pl-4 py-1">
              I help brands communicate their message through visually engaging and strategically driven design solutions.
            </p>

            <div className="flex flex-wrap gap-4 w-full">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors hover:bg-gray-100 shadow-lg shadow-white/5"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="/CV.pdf"
                download="CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-brand-gray/80 text-white font-semibold rounded-xl flex items-center justify-center gap-2 border border-white/10 transition-colors hover:bg-brand-gray"
              >
                Download CV <Download className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent text-gray-300 font-semibold rounded-xl flex items-center justify-center gap-2 border border-white/5 transition-colors hover:border-white/20 hover:text-white"
              >
                Contact Me <Send className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Showcase Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[400px] aspect-[4/5] relative perspective-1000"
          >
            <motion.div
              className="w-full h-full rounded-2xl border border-white/10 bg-brand-gray/40 backdrop-blur-md p-3 relative overflow-hidden cursor-pointer shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Slideshow of designs */}
              <div className="relative w-full h-full rounded-xl overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={showcaseImages[currentImageIndex]}
                    alt="Design Showcase"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Overlays / design frames */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Glass tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-left pointer-events-none translate-z-20 transform">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400">Featured Work</span>
                  <h3 className="text-sm font-semibold text-white mt-1 uppercase tracking-wider">
                    {currentImageIndex === 0 ? "Carmour Branding" : currentImageIndex === 1 ? "Nexoura Campaign" : "Benzwa Visuals"}
                  </h3>
                </div>

                {/* Active index dots */}
                <div className="absolute top-4 right-4 flex gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/10">
                  {showcaseImages.map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? "bg-white scale-125" : "bg-white/40"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bounce mouse icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-700 rounded-full animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
}
