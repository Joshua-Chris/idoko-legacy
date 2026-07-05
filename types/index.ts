import type { LucideIcon } from "lucide-react";

export type IconName =
  | "truck" | "testTube" | "flaskConical" | "pill" | "packageCheck"
  | "route" | "zap" | "calendarClock" | "heartPulse" | "settings2"
  | "building2" | "stethoscope" | "microscope" | "scanLine" | "pillBottle"
  | "smile" | "boxes" | "home" | "activity" | "network" | "flaskRound";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface Industry {
  name: string;
  icon: IconName;
}

export interface ServiceArea {
  name: string;
  isHub?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type IconMap = Record<IconName, LucideIcon>;