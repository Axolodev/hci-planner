export type Module = {
  name: string;
};

export type SectionOption = {
  name: string;
  modules: Module[];
};

export type Section = {
  title: string;
  description: string;
  options: SectionOption[];
};

export type Plan = {
  sections: Section[];
};
