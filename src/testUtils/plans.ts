import { Plan } from "@/types";

export const basicPlan = {
  sections: [
    {
      title: "Section title",
      options: [
        {
          name: "Option name",
          modules: [
            {
              name: "Module name",
            },
          ],
        },
      ],
      description: "",
    },
  ],
};

export const planWithMultipleSectionOptions: Plan = {
  sections: [
    {
      title: "Section title",
      options: [
        {
          name: "Option name",
          modules: [
            {
              name: "Module name",
            },
          ],
        },
        {
          name: "Another option",
          modules: [
            {
              name: "Another module",
            },
          ],
        },
      ],
      description: "",
    },
  ],
};
