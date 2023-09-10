export interface Project {
  name: string;
  img_link: string;
  description: string;
  demo_link: string;
  github_link: string;
}

export const projects: Project[] = [
  {
    name: "Personal Website",
    img_link: "/images/portfolio.jpg",
    description:
      "Personal website & blog crafted with NextJS, TypeScript, Framer Motion, Tailwind CSS, Tailwind Variants & Figma.",
    demo_link: "http://adilarazmi.com",
    github_link: "https://github.com/dila1001/portfolio",
  },
  {
    name: "Contacts App",
    img_link: "/images/project_picture.png",
    description:
      "A contacts app that fetches contacts data from API and displays in list/grid view, featuring lazy-loading.",
    demo_link: "https://dila1001-contacts.netlify.app/",
    github_link: "https://github.com/dila1001/contacts-app",
  },
];
