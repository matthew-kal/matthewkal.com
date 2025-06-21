import {
  githubIcon,
  instagramIcon,
  linkedinIcon,
  emailIcon,
} from "@/assets/icons/all-social";
import linksMetadata from "@/metadata/links";
import AppPaths from "@/constants/paths";

const linksCards = [
  {
    title: "Github",
    href: linksMetadata.github,
    className: "dark:bg-white p-2",
    icon: githubIcon,
  },
  {
    title: "LinkedIn",
    className: "!bg-[#0A66C2] p-4",
    href: linksMetadata.linkedin,
    icon: linkedinIcon,
  },
  {
    title: "Instagram",
    className: "!bg-transparent",
    href: linksMetadata.instagram,
    icon: instagramIcon,
  },
  {
    title: "Mail",
    className: "p-4 bg-dark dark:bg-light",
    href: AppPaths.main.find((path: { name: string; path: string }) => path.name === "Contact")?.path,
    icon: emailIcon,
  },
];

export default linksCards;
