import projectImage from "@/assets/images/project-1.jpeg";
import projectImage2 from "@/assets/images/project-2.jpeg";
import projectImage3 from "@/assets/images/project-3.png";
export type ProjectProps = {
  title: string;
  list: string[];
  period: string;
  role: string;
  client: string | null;
  src: string;
  link: string;
};

export const projects: ProjectProps[] = [
  {
    title: "Bazaar Africa",
    list: [
      "Developed APIs and backend for artisan onboarding, customer signup, service requests, payments, and online shopping, using NodeJS and MongoDB",
      "Developed the mobile application to facilitate payments and deliveries, improving the overall user experience for both clients and artisans.",
    ],
    client: null,
    link: "https://usebazaar.africa",
    period: "April 2024 - Present",
    role: "Front-end & Back-end Developer",
    src: projectImage,
  },
  {
    title: "Kurenode",
    list: [
      "Developed a mobile application for patients to provide medical data, schedule appointments, and receive health plans, and a tablet application for agents to onboard patients, create encounters, and manage patient records",
    ],
    client: "Kurenode",
    link: "https://kurenode.com/",
    period: "July 2024 - Present",
    role: "Front-end Developer",
    src: projectImage2,
  },
  {
    title: "Dishpatch",
    list: [
      "Developed APIs for browsing menus, customizing orders, tracking deliveries, managing payments, optimizing routing, and enabling referrals, reviews, and menu management.",
      "Built a comprehensive dashboard for managing restaurants, riders, customer support, metrics, reporting, and app configuration, streamlining coordination among customers, riders, and logistics partners",
    ],
    client: "Dishpatch",
    link: "https://dishpatch.ng",
    period: "December 2023 - Present",
    role: "Front-end & Back-end Developer",
    src: projectImage3,
  },
];
