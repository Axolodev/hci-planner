import { Section } from "@/types";
import SectionOption from "./SectionOption";
import { Fragment } from "react";

interface Props {
  section: Section;
}

export default function Module({ section }: Props) {
  return (
    <div key={section.title} className="border p-4">
      <h2 className="text-xl font-bold">{section.title}</h2>
      <p>{section.description}</p>
      {section.options && (
        <div className="flex w-full gap-2 mt-2 flex-col md:flex-row">
          {section.options.map((option, index) => (
            <Fragment key={option.name}>
              {index > 0 && (
                <div className="divider md:divider-horizontal">OR</div>
              )}
              <SectionOption option={option} />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
