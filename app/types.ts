export interface StatItem {
  label: string;
  target?: number;
  suffix?: string;
  isSpecial?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  display: string;
}

export interface TimelineEntry {
  year: string;
  role: string;
  org: string;
}

export interface LeadershipCardData {
  num: string;
  title: string;
  org: string;
  desc: string;
  icon: React.ReactNode;
}

export interface SpeakingTopic {
  number: number;
  title: string;
}

export interface TickerItem {
  label: string;
}
