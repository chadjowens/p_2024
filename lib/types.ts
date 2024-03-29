import { links } from "./data";

export type SectionName = (typeof links)[number]["name"]; 
// 'Home' | 'About' | 'Projects' | 'Skills' | 'Experience' | 'Contact';