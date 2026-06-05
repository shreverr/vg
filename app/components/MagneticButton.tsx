"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
  strength?: number;
};

export default function MagneticButton({
  children,
  href = "#contact",
  className = "btn-primary",
  strength = 0.25,
}: Props) {
  const innerRef = useRef<HTMLSpanElement | null>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const node = innerRef.current;
    if (!node) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    node.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onLeave = () => {
    const node = innerRef.current;
    if (!node) return;
    node.style.transform = "translate(0,0)";
  };

  return (
    <a
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      <span ref={innerRef} className="magnetic inline-flex items-center gap-3">
        {children}
      </span>
    </a>
  );
}
