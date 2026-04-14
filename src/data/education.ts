export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export const education: Education[] = [
  {
    degree: "Master of Science in Data Science & Analytics",
    institution: "East West University",
    period: "Ongoing",
  },
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Bangladesh university of business and technology",
    period: "Graduated: December, 2024",
  },
];
