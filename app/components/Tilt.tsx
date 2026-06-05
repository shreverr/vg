"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  max?: number;
  scale?: number;
};

export default function Tilt({
  children,
  className = "",
  max = 6,
  scale = 1.01,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = (-py * max).toFixed(2);
    const ry = (px * max).toFixed(2);
    node.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
  };

  const onLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
