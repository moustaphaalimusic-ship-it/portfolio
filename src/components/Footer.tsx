export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold tracking-tighter mb-4">
              MOUSTAPHA
            </h2>
            <p className="text-white/40 max-w-sm text-sm font-sans uppercase tracking-[0.2em]">
              Graphic Designer • Visual Storyteller
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <p className="text-white/60 font-sans text-sm">
              Social Media • Branding • Product Advertising • Visual Communication
            </p>

            <div className="flex items-center gap-6 mt-4">
              <a
                href="https://www.behance.net/moustaphaalii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest"
              >
                Behance
              </a>

              <a
                href="https://www.linkedin.com/in/moustaphaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest"
              >
                LinkedIn
              </a>
            </div>

            <p className="text-xs text-white/30 font-mono mt-4">
              All Rights Reserved {currentYear} ©
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
