import React from "react";
import { LinearGradient } from "./linear-gradient";
import { DotPattern } from "./dot-pattern";
import { cn } from "@/utils/helper/cn";

export function Dot() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 shadow-2xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Dot Pattern
      </p>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
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
}
