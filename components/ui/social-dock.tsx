"use client";

import Dock from "@/components/Dock/Dock";
import { Github, Linkedin, Code, ExternalLink } from "lucide-react";

const dockItems = [
  {
    icon: <Github className="h-7 w-7" />,
    label: "GitHub",
    onClick: () => window.open("https://github.com", "_blank"),
  },
  {
    icon: <Linkedin className="h-7 w-7" />,
    label: "LinkedIn",
    onClick: () => window.open("https://linkedin.com", "_blank"),
  },
  {
    icon: <Code className="h-7 w-7" />,
    label: "LeetCode",
    onClick: () => window.open("https://leetcode.com", "_blank"),
  },
  {
    icon: <ExternalLink className="h-7 w-7" />,
    label: "Codolio",
    onClick: () => window.open("https://codolio.com", "_blank"),
  },
];

export default function SocialDock() {
  return <Dock items={dockItems} />;
} 