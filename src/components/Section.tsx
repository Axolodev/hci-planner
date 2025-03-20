import { Section } from "@/types";
import SectionOption from "./SectionOption";

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
          {section.options.map((option) => (
            <SectionOption key={option.name} option={option} />
          ))}
        </div>
      )}
    </div>
  );
}
