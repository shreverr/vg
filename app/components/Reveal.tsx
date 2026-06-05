"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

type Variant = "fade" | "image" | "left" | "right" | "scale";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  variant?: Variant;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  variant = "fade",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;
  const Component = Tag as React.ElementType;
  const variantClass =
    variant === "image"
      ? "img-reveal"
      : variant === "left"
      ? "reveal-left"
      : variant === "right"
      ? "reveal-right"
      : variant === "scale"
      ? "reveal-scale"
      : "reveal";

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${variantClass} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}
