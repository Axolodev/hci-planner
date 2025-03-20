import { useEffect } from "react";
import { themeChange } from "theme-change";

import Module from "@/components/Section";
import plan from "@/data/plan";
import ThemeSelector from "@/components/ThemeSelector";

export default function Home() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div>
      <ThemeSelector />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-4xl font-bold">{plan.title}</h1>
        <div className="grid gap-8">
          {plan.sections.map((section) => (
            <Module key={section.title} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}
