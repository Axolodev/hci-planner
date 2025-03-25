import { Fragment } from "react";
import ConfettiExplosion from "react-confetti-blast";

import { Section as SectionType } from "@/types";
import SectionOption from "./SectionOption";
import { useCoursesStore } from "@/providers/CoursesStoreProvider";

export const INDICATOR_TESTING_ID = "section-indicator";

interface Props {
  section: SectionType;
}

export default function Section({ section }: Props) {
  const { getIsSectionCompleted: isSectionCompleted } = useCoursesStore(
    (state) => state
  );
  const isCompleted = isSectionCompleted(section.title);

  return (
    <div className="p-4 bg-base-200 rounded-box flex flex-col indicator w-full">
      <label
        className={`swap text-3xl indicator-item absolute cursor-default ${
          isCompleted ? "swap-active" : ""
        }`}
        data-testid={INDICATOR_TESTING_ID}
      >
        <div className="swap-on">✅</div>
        <div className="swap-off"></div>
        {isCompleted && (
          <ConfettiExplosion
            force={0.3}
            duration={2200}
            particleCount={30}
            width={400}
            zIndex={2}
          />
        )}
      </label>

      <h2 className="text-xl font-bold pb-1">{section.title}</h2>
      <p className="pb-1">{section.description}</p>
      <div className="flex w-full gap-2 mt-2 flex-col md:flex-row flex-1">
        {section.options.map((option, index) => (
          <Fragment key={option.name}>
            {index > 0 && (
              <div className="divider md:divider-horizontal">OR</div>
            )}
            <SectionOption
              option={option}
              sectionTitle={section.title}
              optionIndex={index}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
