import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils/cn";

type RevealProps = {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  /** milliseconds */
  delay?: number;
  /** px offset */
  y?: number;
  scale?: number;
} & Record<string, unknown>;

/**
 * Lightweight wrapper that hands an element over to the global
 * IntersectionObserver driven reveal system (see index.css).
 */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  y = 30,
  scale = 1,
}: RevealProps) {
  return (
    <Tag
      data-reveal=""
      className={cn(className)}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          "--reveal-y": `${y}px`,
          "--reveal-scale": scale,
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
