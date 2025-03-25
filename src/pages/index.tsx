import { useEffect } from "react";
import { themeChange } from "theme-change";

import Section from "@/components/Section";
import HCIPlan from "@/data/plan";
import MainLayout from "@/layout/MainLayout";
import { useCoursesStore } from "@/providers/CoursesStoreProvider";

export default function Home() {
  useEffect(() => {
    themeChange(false);
  }, []);

  const { getIsPlanCompleted } = useCoursesStore((state) => state);
  const isPlanCompleted = getIsPlanCompleted();

  return (
    <MainLayout isPlanCompleted={isPlanCompleted}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {HCIPlan.sections.map((section) => (
          <Section key={section.title} section={section} />
        ))}
      </div>
    </MainLayout>
  );
}
