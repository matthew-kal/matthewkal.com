import { description, title } from "@/constants/strings";
import { Metadata } from "next";
import metadataBuilder from "./builder";

const rootMetadata: Metadata = metadataBuilder(title, description, {
  keywords: [
    "Mobile",
    "Flutter",
    "Dart",
    "Web",
    "Next.js",
    "React",
    "TypeScript",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
});

export default rootMetadata;
