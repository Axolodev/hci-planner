import { SectionOption as SectionOptionType } from "@/types";

interface Props {
  option: SectionOptionType;
}

export default function SectionOption({ option }: Props) {
  return (
    <div className="p-4 flex-1 bg-base-300 rounded-lg">
      {option.modules.map((module) => (
        <div key={module.name} className="flex items-center gap-2">
          <input type="checkbox" />
          <label>{module.name}</label>
        </div>
      ))}
    </div>
  );
}
