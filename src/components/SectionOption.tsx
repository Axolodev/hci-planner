import { SectionOption as SectionOptionType } from "@/types";
import { FaInfoCircle } from "react-icons/fa";
import Module from "./Module";
import { useCoursesStore } from "@/providers/CoursesStoreProvider";

export const TESTING_ID_PREFIX = "SectionOption-";

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
      className={`p-4 flex-1 rounded-box flex flex-col items-stretch gap-2 justify-center transition-colors join w-full indicator ${
        isNeighborStarted ? "bg-base-300/60 cursor-not-allowed" : "bg-base-300"
      }`}
      data-testid={`${TESTING_ID_PREFIX}${optionIndex}`}
    >
      <span
        className="indicator-item text-info tooltip cursor-help"
        data-tip={option.creditsInfo}
      >
        <FaInfoCircle className="text-lg" />
      </span>
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
