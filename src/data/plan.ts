import { Plan } from "@/types";

const plan: Plan = {
  sections: [
    {
      title: "Basics of Human-Computer Interaction",
      description: "You must take all of these",
      options: [
        {
          name: "Basics of HCI",
          creditsInfo: "9 Credits each",
          modules: [{ name: "HCI & A&E" }, { name: "Psychology & UX Design" }],
        },
      ],
    },
    {
      title: "Consolidation",
      description: "Choose one of the following modules",
      options: [
        {
          name: "CSCW & CSCL",
          creditsInfo: "9 Credits each",
          modules: [{ name: "CSCW & CSCL" }],
        },
        {
          name: "Ubicomp & Usable Security",
          creditsInfo: "9 Credits each",
          modules: [{ name: "Ubiquitous Computing & Usable Security" }],
        },
      ],
    },
    {
      title: "Practice",
      description: "You must take 3 projects",
      options: [
        {
          name: "Practice",
          creditsInfo: "9 Credits each",
          modules: [
            { name: "Project A" },
            { name: "Project B" },
            { name: "Project C" },
          ],
        },
      ],
    },
    {
      title: "Current Research in HCI",
      description:
        "You must take either 3 research modules or 2 research modules and an internship",
      options: [
        {
          name: "Research only",
          creditsInfo: "6 Credits each",
          modules: [
            { name: "Current Research 1" },
            { name: "Current Research 2" },
            { name: "Current Research 3" },
          ],
        },
        {
          name: "Research and Internship",
          creditsInfo: "6 Credits each",
          modules: [
            { name: "Current Research 1" },
            { name: "Current Research 2" },
            { name: "Internship" },
          ],
        },
      ],
    },
    {
      title: "Interdisciplinary Contexts",
      description:
        "You must choose to take either 3 courses of 6 credits each or 2 courses of 9 credits each.",
      options: [
        {
          name: "6 Credits each",
          creditsInfo: "6 Credits each",
          modules: [
            { name: "Interdisciplinary Context 1" },
            { name: "Interdisciplinary Context 2" },
            { name: "Interdisciplinary Context 3" },
          ],
        },
        {
          name: "9 Credits each",
          creditsInfo: "9 Credits each",
          modules: [
            { name: "Interdisciplinary Context 1" },
            { name: "Interdisciplinary Context 2" },
          ],
        },
      ],
    },
    {
      title: "Master's Thesis",
      description:
        "You need to do a master's thesis to graduate. You can start this when you have completed all three projects.",
      options: [
        {
          creditsInfo: "30 Credits",
          name: "Master's Thesis",
          modules: [{ name: "Master's Thesis" }],
        },
      ],
    },
  ],
};

export default plan;
