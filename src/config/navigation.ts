import { BookOpen, Sparkles, Trophy, Lightbulb } from "lucide-react";

export const NAVIGATION_CONFIG = [
  { key: "guides", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "predictions", path: "/predictions", icon: Sparkles, isContentType: true },
  { key: "rewards", path: "/rewards", icon: Trophy, isContentType: true },
  { key: "tips", path: "/tips", icon: Lightbulb, isContentType: true },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
