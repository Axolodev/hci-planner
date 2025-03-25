import { Section as SectionType } from "@/types";
import SectionOption from "./SectionOption";
import { Fragment } from "react";

interface Props {
  section: SectionType;
}

export default function Section({ section }: Props) {
  return (
    <div
      key={section.title}
      className="p-4 bg-base-200 rounded-box flex flex-col"
    >
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
