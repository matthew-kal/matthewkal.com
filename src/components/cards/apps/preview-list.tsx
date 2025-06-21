import DevicesIcon from "@/assets/icons/EverythingIcon";
import CardButton from "@/shared/components/buttons/card-button";
import CardTitle from "@/shared/components/titles/card-title";
import cardStyle from "@/shared/styles/card";
import Link from "next/link";
import AppItem from "./app-item";
import { Projects } from "./data/Projects";

function PreviewAppsList() {
  return (
    <div className={cardStyle}>
      <CardTitle icon={<DevicesIcon />} title="FEATURED" />
      <div className="h-8" />
      <div className="flex flex-wrap content-center gap-7">
        {[...Projects.slice(0, 2)].map((card) => (
          <AppItem key={card.title} card={card} />
        ))}
      </div>
      <div className="h-5" />
      <div className="w-full">
        <Link href="/work">
          <CardButton
            title="VIEW ALL"
            className="hover:animate-scale float-right px-7"
          />
        </Link>
      </div>
    </div>
  );
}

export default PreviewAppsList;
