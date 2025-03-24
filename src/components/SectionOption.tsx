import { SectionOption as SectionOptionType } from "@/types";

interface Props {
  option: SectionOptionType;
}

export default function SectionOption({ option }: Props) {
  return (
    <div className="p-4 flex-1 bg-base-300 rounded-lg flex flex-col gap-1 justify-center">
      {option.modules.map((module) => (
        <div key={module.name} className="flex items-center gap-2">
          <input type="checkbox" id={module.name} />
          <label htmlFor={module.name}>{module.name}</label>
        </div>
      ))}
    </div>
  );
}
