import WorkItemType from "./app";

export const Projects: WorkItemType[] = [
  {
    title: "SurgiCalm",
    description:
      "Mobile application aimed at reducing stress in pre- and post-operative patients. The platform delivers evidence-based practices such as guided breathing, yoga routines, nutrition planning, and mindfulness techniques to support holistic recovery and improve patient well-being.",
    icon: "/works/surgicalm.png",
    image: "/works/surgicalm.png",
    path: "https://surgicalm.com",
    tags: ["React Native", "React.js", "Django", 
            "MySQL", "AWS S3", "AWS RDS", 
            "AWS EC2", "Expo" ],
    hasBorder: true,
  },
  {
    title: "Posture Police",
    description:
      "lightweight VS Code extension designed to help developers maintain healthy posture during long coding sessions. It uses real-time posture detection powered by MediaPipe and alerts users when slouching is detected.",
    icon: "/works/posturepolice.png",
    image: "/works/posturepolice.png",
    path: "https://marketplace.visualstudio.com/items?itemName=JoffreLoorMatthewKalender.posture-police",
    github: "https://github.com/matthew-kal/PosturePolice",
    tags: ["TypeScript", "FastAPI", "MediaPipe", 
            "OpenCV"],
    hasBorder: true,
  },
  {
    title: "matthewkalender.com",
    description:
      "Personal portfolio website. Heavily Inspired by Ayoub Kremcht and kreatordev.com",
    icon: "/me/main.png",
    image: "/me/main.png",
    github: "https://github.com/matthew-kal",
    path: "/",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    hasBorder: true,
  },
];
