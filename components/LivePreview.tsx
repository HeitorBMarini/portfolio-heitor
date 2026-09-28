"use client";

import { useEffect, useRef, useState } from "react";

const BASE_W = 1280;
const BASE_H = 800;

// Miniatura ao vivo de uma página, renderizada em 1280x800 e escalada para caber.
export function LivePreview({ src, title }: { src: string; title: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / BASE_W));
    ro.observe(box);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={boxRef} className="relative w-full overflow-hidden bg-bg" style={{ aspectRatio: `${BASE_W} / ${BASE_H}` }}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        tabIndex={-1}
        aria-hidden
        className="absolute top-0 left-0 border-0 pointer-events-none origin-top-left"
        style={{ width: BASE_W, height: BASE_H, transform: `scale(${scale})` }}
      />
    </div>
  );
}
