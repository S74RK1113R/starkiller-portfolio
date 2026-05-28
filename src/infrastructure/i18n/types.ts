export interface I18nDictionary {
  greeting: string;
  name: string;
  role: string;
  aboutText: string;

  nav: {
    projects: string;
    skills: string;
    about: string;
    contact: string;
  };

  buttons: {
    repository: string;
    viewProject: string;
  };

  sectionTitles: {
    projects: string;
    skills: string;
    about: string;
    contact: string;
  };

  projectNames: {
    plantrek: string;
    dynamJobs: string;
  };

  projectDescriptions: {
    plantrek: string;
    dynamJobs: string;
  };

  projectTech: {
    plantrek: string[];
    dynamJobs: string[];
  };

  projectUrls: {
    plantrek: string;
    dynamJobs: string;
  };

  skills: string[];

  aboutParagraphs: string[];

  contact: {
    information: string;
    whatsapp: string;
    github: string;
    linkedin: string;
    email: string;
  };
}
