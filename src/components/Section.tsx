import { Section as SectionType } from "@/types";
import SectionOption from "./SectionOption";
import { Fragment } from "react";
import { useCoursesStore } from "@/providers/CoursesStoreProvider";

interface Props {
  section: SectionType;
}

export default function Section({ section }: Props) {
  const { isSectionCompleted } = useCoursesStore((state) => state);
  const isCompleted = isSectionCompleted(section.title);

  return (
    <div className="p-4 bg-base-200 rounded-box flex flex-col indicator w-full">
      <label
        className={`swap swap-rotate text-3xl indicator-item absolute cursor-default ${
          isCompleted ? "swap-active" : ""
        }`}
      >
        <div className="swap-on">✅</div>
        <div className="swap-off"></div>
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
