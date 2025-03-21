import { useEffect } from "react";
import { themeChange } from "theme-change";

import Module from "@/components/Section";
import plan from "@/data/plan";
import Footer from "@/components/Footer";
import ThemeSelector from "@/components/ThemeSelector";

export default function Home() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div>
      <main className="flex flex-col items-center justify-items-center min-h-screen p-8 max-w-[800px] mx-auto">
        <h1 className="text-4xl font-bold mb-6">{plan.title}</h1>
        <div className="h-10 flex w-full mb-4 justify-end">
          <ThemeSelector />
        </div>
        <div className="grid gap-8">
          {plan.sections.map((section) => (
            <Module key={section.title} section={section} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
