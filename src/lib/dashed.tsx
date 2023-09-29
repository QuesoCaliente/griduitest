"use client";

import { cn } from "@/utils/helper/cn";
import { GridPattern } from "./grid-pattern";
import { RadialGradient } from "./radial-gradient";
import { LinearGradient } from "./linear-gradient";

export const GridPatternDashed = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 shadow-2xl">
      <p className="z-50 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Grid Pattern
      </p>
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <LinearGradient
        to="rgba(120,119,198,0.3)"
        from="rgba(0,0,0,0.0)"
        direction="bottom right"
      />
    </div>
  );
};
