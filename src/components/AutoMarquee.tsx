import React, { useRef, useEffect } from "react";

interface AutoMarqueeProps {
  images: string[];
  onImageClick?: (src: string) => void;
  reverse?: boolean;
}

export function AutoMarquee({ images, onImageClick, reverse = false }: AutoMarqueeProps) {
  // Duplicate the array to create a seamless looping effect
  const marqueeImages = [...images, ...images];
  const containerRef = useRef<HTMLDivElement>(null);
  
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const touchStartPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      // Only auto-scroll if NOT dragging
      if (!isDown.current) {
        const speed = 0.05; // pixels per ms
        if (reverse) {
          container.scrollLeft -= speed * delta;
          const halfWidth = container.scrollWidth / 2;
          if (halfWidth > 0 && container.scrollLeft <= 0) {
            container.scrollLeft += halfWidth;
          }
        } else {
          container.scrollLeft += speed * delta;
          // Loop check
          const halfWidth = container.scrollWidth / 2;
          if (halfWidth > 0) {
            if (container.scrollLeft >= halfWidth) {
              container.scrollLeft -= halfWidth;
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Mouse and touch movement handlers on the window to ensure continuous dragging outside the container bounds
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!isDown.current) return;
      
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      let newScrollLeft = scrollLeft.current - walk;

      const halfWidth = container.scrollWidth / 2;
      if (halfWidth > 0) {
        if (newScrollLeft >= halfWidth) {
          newScrollLeft -= halfWidth;
          startX.current += halfWidth / 1.5;
          scrollLeft.current -= halfWidth;
        } else if (newScrollLeft < 0) {
          newScrollLeft += halfWidth;
          startX.current -= halfWidth / 1.5;
          scrollLeft.current += halfWidth;
        }
      }

      container.scrollLeft = newScrollLeft;
    };

    const handleWindowMouseUp = () => {
      isDown.current = false;
    };

    const handleWindowTouchMove = (e: TouchEvent) => {
      if (!isDown.current) return;
      if (e.touches.length === 0) return;

      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      let newScrollLeft = scrollLeft.current - walk;

      const halfWidth = container.scrollWidth / 2;
      if (halfWidth > 0) {
        if (newScrollLeft >= halfWidth) {
          newScrollLeft -= halfWidth;
          startX.current += halfWidth / 1.5;
          scrollLeft.current -= halfWidth;
        } else if (newScrollLeft < 0) {
          newScrollLeft += halfWidth;
          startX.current -= halfWidth / 1.5;
          scrollLeft.current += halfWidth;
        }
      }

      container.scrollLeft = newScrollLeft;
    };

    const handleWindowTouchEnd = () => {
      isDown.current = false;
    };

    window.addEventListener("mousemove", handleWindowMouseMove);
    window.addEventListener("mouseup", handleWindowMouseUp);
    window.addEventListener("touchmove", handleWindowTouchMove, { passive: true });
    window.addEventListener("touchend", handleWindowTouchEnd);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", handleWindowMouseUp);
      window.removeEventListener("touchmove", handleWindowTouchMove);
      window.removeEventListener("touchend", handleWindowTouchEnd);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    isDown.current = true;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
    dragStartPos.current = { x: e.pageX, y: e.pageY };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;

    isDown.current = true;
    startX.current = e.touches[0].pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
    touchStartPos.current = { x: e.touches[0].pageX, y: e.touches[0].pageY };
  };

  const handleMouseUp = (e: React.MouseEvent, clickedSrc: string) => {
    isDown.current = false;
    const distance = Math.hypot(e.pageX - dragStartPos.current.x, e.pageY - dragStartPos.current.y);
    if (distance < 5 && onImageClick) {
      onImageClick(clickedSrc);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent, clickedSrc: string) => {
    isDown.current = false;
    if (e.changedTouches.length === 0) return;
    const distance = Math.hypot(
      e.changedTouches[0].pageX - touchStartPos.current.x,
      e.changedTouches[0].pageY - touchStartPos.current.y
    );
    if (distance < 5 && onImageClick) {
      onImageClick(clickedSrc);
    }
  };

  return (
    <div className="w-full relative py-4">
      {/* Decorative gradient masks for fading effect at edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div
        ref={containerRef}
        className="w-full overflow-hidden flex cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="flex gap-4 min-w-max pr-4">
          {marqueeImages.map((src, idx) => (
            <div
              key={idx}
              className={`h-64 md:h-80 lg:h-96 w-auto shrink-0 rounded-2xl overflow-hidden bg-white/5 select-none ${
                onImageClick ? "cursor-pointer" : ""
              }`}
              onMouseUp={(e) => handleMouseUp(e, src)}
              onTouchEnd={(e) => handleTouchEnd(e, src)}
            >
              <img
                src={src}
                alt={`Gallery Image ${idx}`}
                className="h-full w-auto object-cover select-none pointer-events-none"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
