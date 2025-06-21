import { title } from "@/constants/strings";
import linksMetadata from "@/metadata/links";
import cardStyle from "../styles/card";

function Footer() {
  const year = new Date().getFullYear();
  const onHoverStyle = "hover:underline hover:text-black dark:hover:text-white";
  
  return (
    <footer
      className={
        cardStyle +
        "!py-3 my-6 flex flex-col sm:flex-row items-center justify-center rounded-3xl w-full text-sm text-neutral-500 text-center gap-3 h-fit"
      }
    >
      <div className="flex flex-wrap items-center justify-center">
        <a>Always In Motion |</a>
        <div className="w-1" />
        <a className={onHoverStyle} target="_blank" href={linksMetadata.github}>
      {title} 
    </a>
      </div>
    </footer>
  );
}

export default Footer;