import type { StatItem, NavLink, TimelineEntry, LeadershipCardData } from '@/app/types';

export const SITE_NAME = 'Guillaume Niarfeix';

export const NAV_LINKS: NavLink[] = [
  { label: 'about', href: '#about', display: 'about' },
  { label: 'leadership', href: '#leadership', display: 'leadership' },
  { label: 'award', href: '#award', display: 'Recognition' },
  { label: 'book', href: '#book', display: 'book' },
  { label: 'speaking', href: '#speaking', display: 'speaking' },
  { label: 'contact', href: '#contact', display: 'contact' },
];

export const TICKER_ITEMS: string[] = [
  'SPIE West Africa',
  'Franco Nigerian Chamber of Commerce',
  "Chevalier de l'Ordre National du Mérite",
  'Energy Transition Leader',
  'Electrochoc  Author',
  'Franco-African Business Diplomacy',
  'International Speaker',
];

export const STATS: StatItem[] = [
  { label: 'Years of Leadership', target: 20, suffix: '+' },
  { label: 'Countries of Influence', target: 15, suffix: '+' },
  { label: 'Published Book', target: 1, suffix: '' },
  { label: 'National du Mérite · 2025', isSpecial: true },
];

export const HERO_TAGLINE = 'Managing Director · SPIE West Africa';

export const HERO_HEADING_LINE1 = 'Driving Strategic';
export const HERO_HEADING_ACCENT = 'Energy Leadership';
export const HERO_HEADING_LINE2 = 'Across Africa';

export const HERO_DESCRIPTION =
  'Managing Director of SPIE West Africa, President of the Franco Nigerian Chamber of Commerce and Industry, Author, Speaker, and International Business Leader.';

export const ABOUT_PARAGRAPHS = [
  {
    text: '<strong>Guillaume Niarfeix</strong> is a distinguished French business executive whose career has been defined by transformative leadership at the intersection of <em>energy, infrastructure, and international diplomacy</em>. As Managing Director of SPIE West Africa, he leads one of the region\'s most strategically significant engineering and energy service operations.',
  },
  {
    text: 'His appointment as <strong>President of the Franco Nigerian Chamber of Commerce and Industry</strong> reflects his exceptional standing as a bridge between European expertise and African economic dynamism  championing bilateral trade, investment, and business collaboration at the highest levels.',
  },
  {
    text: 'Beyond his executive roles, Guillaume has established himself as a <strong>thought leader</strong> and author, publishing <em>Electrochoc: Réarmer l\'énergie</em> — a compelling work addressing the critical challenges of energy transition and the strategic imperatives facing Africa and Europe in the 21st century.',
  },
];

export const TIMELINE: TimelineEntry[] = [
  { year: 'Present', role: 'Managing Director', org: 'SPIE West Africa' },
  { year: 'Present', role: 'President', org: 'Franco-Nigerian Chamber of Commerce and Industry' },
  { year: 'Nov 2025', role: "Chevalier de l'Ordre National du Mérite", org: 'République Française' },
  { year: '2024', role: "Author — Electrochoc: Réarmer l'énergie", org: 'Éditions Fauves · International Release' },
];

export const LEADERSHIP_CARDS: LeadershipCardData[] = [
  {
    num: '01',
    title: 'Managing Director',
    org: 'SPIE West Africa',
    desc: "Leading one of West Africa's foremost engineering and energy service enterprises, driving operational excellence and strategic expansion across the region's most critical infrastructure sectors.",
    icon: <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />,
  },
  {
    num: '02',
    title: 'President',
    org: 'Franco-Nigerian Chamber of Commerce',
    desc: 'Championing bilateral economic relations between France and Nigeria, facilitating trade, investment, and business diplomacy at the highest institutional level.',
    icon: (
      <g>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </g>
    ),
  },
  {
    num: '03',
    title: 'Strategic Energy Leader',
    org: 'International Infrastructure',
    desc: 'Over two decades of expertise in energy infrastructure, power generation, electrical engineering, and the strategic transition to sustainable energy systems across Africa.',
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  },
  {
    num: '04',
    title: 'Author',
    org: "Electrochoc: Réarmer l'énergie",
    desc: "Published thought leader addressing the geopolitics of energy, Africa's energy sovereignty, and the economic opportunities of the accelerated energy transition.",
    icon: <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />,
  },
  {
    num: '05',
    title: 'International Speaker',
    org: 'Global Conferences & Forums',
    desc: 'Sought-after voice at international forums on energy transition, Africa-Europe business relations, infrastructure investment, and sustainable development leadership.',
    icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  },
  {
    num: '06',
    title: 'Business Diplomat',
    org: 'Franco-African Relations',
    desc: 'A bridge between French enterprise expertise and African economic leadership, fostering institutional trust, policy dialogue, and long-term partnerships across two continents.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
];

export const SPEAKING_TOPICS = [
  { number: 1, title: 'The Energy Transition in Africa' },
  { number: 2, title: 'Franco-African Business Relations' },
  { number: 3, title: 'Executive Leadership in Emerging Markets' },
];

export const AWARD_TITLE = "Chevalier de l'Ordre National du Mérite";
export const AWARD_SUBTITLE = 'Knight of the National Order of Merit';
export const AWARD_DATE = 'Awarded November 21, 2025';

export const BOOK_TITLE = 'Électrochoc';
export const BOOK_SUBTITLE = "Réarmer l'énergie";
export const BOOK_AUTHOR = SITE_NAME;

export const VISION_QUOTE =
  "\"Africa's energy future is not a problem to be solved — it is an opportunity to be seized.\"";

export const COPYRIGHT = `© 2026 ${SITE_NAME}. All rights reserved.`;
