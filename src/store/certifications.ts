import {
  FULL_STACK_ENGINEER,
  FULL_STACK_DEVELOPER,
  FRONT_END_DEVELOPER,
} from "./constants";
import { Plan } from "@/types/Plan";

export function mapCertificationToPlan(cert: any, startDate: Date): Plan {
  return {
    id: cert.id,
    name: cert.name,
    description: cert.description,
    startDate: startDate,
    studyHours: 40,
    totalStudyHours: cert.studyHours,
    mentorSessions: cert.mentorSessions / 5,
    price: cert.price,
    months: 0,
    isMonthly: false,
    isFixed: false,
    appFee: true,
  };
}

export const certifications = [
  {
    id: "fed",
    name: FRONT_END_DEVELOPER,
    description:
      "Develop and deploy complex, dynamic front-end web applications using HTML, CSS, JavaScript and React.",
    studyHours: 520,
    levels: 3,
    icon: "pencil-ruler",
    noun: "design",
    badgeUrl: "img/badges/fed-master.png",
    mentorSessions: 65 * 2,
    evaluations: 30,
    price: 4500,
  },
  {
    id: "fsd",
    name: FULL_STACK_DEVELOPER,
    description:
      "Develop challenging full-stack, data-driven web applications using best practices in technologies like React, NodeJS, TypeScript and C#.",
    recommended: true,
    studyHours: 1040,
    levels: 6,
    icon: "laptop-code",
    noun: "develop",
    badgeUrl: "img/badges/fsd-master.png",
    mentorSessions: 130 * 2,
    evaluations: 60,
    price: 9000,
  },
  {
    id: "fse",
    name: FULL_STACK_ENGINEER,
    description:
      "Develop complex, secure and well-engineered full-stack web applications using multiple front-end and back-end technologies.",
    studyHours: 1560,
    levels: 9,
    icon: "server",
    noun: "server",
    badgeUrl: "img/badges/fse-master.png",
    mentorSessions: 195 * 2,
    evaluations: 90,
    price: 13500,
  },
];
