import WorkItemType from "./app";

export const Projects: WorkItemType[] = [
  {
    title: "RAGgedy",
    description:
      "A local-first desktop app built for querying massive documents. Leverages RAG and SLMs to deliver answers to any question.",
    icon: "/works/vector.png",
    image: "/works/vector.png",
    path: "https://github.com/matthew-kal/RAGgedy",
    tags: ["Electron.js", "Node.js", "LanceDB", 
            "Python", "SLMs"],
    hasBorder: true, 
  }, 
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
    title: "C++ Webserver",
    description:
      "Performant HTTP 1.1 server built entirely in C/C++. Though this project has no real use, I'm using it as an opportunity to get familar with networks on a granular scale.",
    icon: "/works/websererver.png",
    image: "/works/webserver.png",
    path: "https://github.com/matthew-kal/CPP-Networking",
    tags: ["C++", "C" ],
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
