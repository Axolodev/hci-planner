import { SectionOption as SectionOptionType } from "@/types";
import Module from "./Module";
import { useCoursesStore } from "@/providers/CoursesStoreProvider";

interface Props {
  option: SectionOptionType;
  sectionTitle: string;
  optionIndex: number;
}

export default function SectionOption({
  option,
  sectionTitle,
  optionIndex,
}: Props) {
  const {
    getIsNeighbourSectionOptionStarted: isNeighbourSectionOptionStarted,
  } = useCoursesStore((state) => state);
  const isNeighborStarted = isNeighbourSectionOptionStarted(
    sectionTitle,
    optionIndex
  );

  return (
    <div
      className={`p-4 flex-1 rounded-box flex flex-col items-stretch gap-2 justify-center transition-colors join w-full ${
        isNeighborStarted ? "bg-base-300/60 cursor-not-allowed" : "bg-base-300"
      }`}
    >
      {option.modules.map((module, index) => (
        <Module
          key={module.name}
          name={module.name}
          optionName={option.name}
          moduleIndex={index}
          sectionTitle={sectionTitle}
          optionIndex={optionIndex}
          disabled={isNeighborStarted}
        />
      ))}
    </div>
  );
}
