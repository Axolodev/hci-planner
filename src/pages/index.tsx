import { useEffect } from "react";
import { themeChange } from "theme-change";

import Module from "@/components/Section";
import plan from "@/data/plan";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {plan.sections.map((section) => (
          <Module key={section.title} section={section} />
        ))}
      </div>
    </MainLayout>
  );
}
