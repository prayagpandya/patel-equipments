import { company, companyIntro, companyStats, companyFacts, visionStatement, visionPoints, missionStatement, missionPoints, qualitySections, whyChoosePatel, milestones, teamGroups, teamNote, infrastructureSections, majorMarkets, marketNote, clientSatisfactionPoints, manufacturingRange } from '@/data/company';
import { industries } from '@/data/industries';
import { testimonials, testimonialsNote } from '@/data/testimonials';
import { news, newsNote } from '@/data/news';

export async function getCompanyInfo() {
  return {
    ...company,
    intro: companyIntro,
    vision: visionStatement,
    visionPoints,
    mission: missionStatement,
    missionPoints,
    teamNote,
    marketNote,
    clientSatisfactionPoints,
    manufacturingRange
  };
}

export async function getCompanyStats() {
  return [...companyStats];
}

export async function getCompanyFacts() {
  return [...companyFacts];
}

export async function getMilestones() {
  return [...milestones];
}

export async function getTeamGroups() {
  return [...teamGroups];
}

export async function getWhyChoose() {
  return [...whyChoosePatel];
}

export async function getQualitySections() {
  return [...qualitySections];
}

export async function getInfrastructureSections() {
  return [...infrastructureSections];
}

export async function getMajorMarkets() {
  return [...majorMarkets];
}

export async function getTestimonials() {
  return {
    items: [...testimonials],
    note: testimonialsNote
  };
}

export async function getIndustries() {
  return [...industries];
}

export async function getNews() {
  return {
    items: [...news],
    note: newsNote
  };
}
