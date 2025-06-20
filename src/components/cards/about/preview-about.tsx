import { author, shortAbout } from "@/constants/strings";
import CardButton from "@/shared/components/buttons/card-button";
import CardTitle from "@/shared/components/titles/card-title";
import cardStyle from "@/shared/styles/card";
import { scrollToTop } from "@/shared/utils/window";
import Image from "next/image";
import Link from "next/link";

export default function PreviewAboutCard({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cardStyle + className}>
      <div className="flex flex-row w-full">
        <div className="flex flex-col flex-grow">
          <CardTitle title="matthew.kalender.swe" />
          <p className="text-xl font-medium mt-4">Hi, I{"'"}m Kal 👋</p>
        </div>
        <div className="px-3 py-2 rounded-full">
          <Image
            className="hidden 2xs:block rounded-full"
            src="/me/main.png"
            alt={author}
            width={80}
            height={80}
            
          />
        </div>
      </div>
      <span className="text-base font-normal opacity-70 leading-relaxed mt-3 mb-6">
        {shortAbout}
      </span>
      <Link
        onClick={() => {
          scrollToTop();
        }}
        href="/about"
        className="hover:animate-scale"
      >
        <CardButton title="LEARN MORE" />
      </Link>
    </div>
  );
}
