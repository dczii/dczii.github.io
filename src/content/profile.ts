import { siteDescription, siteTitle } from "@z/app/site";

export const siteName = "Danilo Zabala II";
export const siteRole = "Senior Frontend Engineer";
export const githubUrl = "https://github.com/dczii";
export const linkedInUrl = "https://www.linkedin.com/in/dczii";
export const emailAddress = "dczii@live.com";

export const sitePitch =
  "My expertise lies in designing and developing intuitive user interfaces for a variety of applications.";

export const contactLine =
  "I've consistently delivered high-quality, visually appealing, and highly functional web experiences.";

export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export type WorkDataType = {
  year: string;
  company: string;
  title: string;
  jobDescription: string;
};

export type WorkEntry = WorkDataType & {
  summary: readonly string[];
};

export const WORK_DATA: WorkEntry[] = [
  {
    "year": "November 2022 - Present",
    "company": "The Virtual Wild",
    "title": "Senior Software Frontend Engineer",
    "jobDescription": "<li>Engineered a seamless user interface for client applications, enhancing user engagement and satisfaction.</li><li>Led the development of an advanced ticketing system with an interactive seat map selection feature.</li><li>Integrated comprehensive login and payment solutions, streamlining user experience and boosting transaction security.</li><li>Improved seat map loading time by more than 70% using cache and server side rendering.</li><li>Improved loading time and caching capability of the website dashboard  tool to be used in conventions</li>",
    "summary": [
      "Engineered a seamless user interface for client applications, enhancing user engagement and satisfaction.",
      "Led the development of an advanced ticketing system with an interactive seat map selection feature.",
      "Integrated comprehensive login and payment solutions, streamlining user experience and boosting transaction security.",
      "Improved seat map loading time by more than 70% using cache and server side rendering.",
      "Improved loading time and caching capability of the website dashboard  tool to be used in conventions"
    ]
  },
  {
    "year": "April 2022 - October 22",
    "company": "SupraOracles",
    "title": "Senior Software Frontend Engineer",
    "jobDescription": "<li>Spearheaded the development of a Web 3 Wallet using React, enhancing user interaction with blockchain technologies.</li><li>Engineered seamless integration of the Wallet App with multiple blockchain networks (Ethereum, Solana, SUI, APTOS), expanding the app's market reach.</li><li>Defined and implemented robust frontend architectures, improving code maintainability and scalability.</li><li>Integrate unit testing using Jest</li>",
    "summary": [
      "Spearheaded the development of a Web 3 Wallet using React, enhancing user interaction with blockchain technologies.",
      "Engineered seamless integration of the Wallet App with multiple blockchain networks (Ethereum, Solana, SUI, APTOS), expanding the app's market reach.",
      "Defined and implemented robust frontend architectures, improving code maintainability and scalability.",
      "Integrate unit testing using Jest"
    ]
  },
  {
    "year": "June 2021 - March 2022",
    "company": "EBSCO Information Services",
    "title": "Frontend Developer",
    "jobDescription": "<li>Website UI and functionality maintenance.</li><li>Develop new component features and modules to be deployed for all sub websites.</li>",
    "summary": [
      "Website UI and functionality maintenance.",
      "Develop new component features and modules to be deployed for all sub websites."
    ]
  },
  {
    "year": "August 2019 - June 2021",
    "company": "Traction Tools",
    "title": "Frontend Engineer",
    "jobDescription": "<li>Built Version 2 of the company Saas software.</li><li>Discover necessary technologies needed and present pros and cons.</li><li>Help Architect Version 2 Web App.</li><li>Team member that created a mono repo for Version 2 Web app.</li><li>Includes internal UI, core functionalities, and Web part</li><li>Conduct bug fixes for V1 and V2 Web App. Used Jest for creating Unit tests. </li><li>Used ReactJS, TypeScript and Storybook.</li>",
    "summary": [
      "Built Version 2 of the company Saas software.",
      "Discover necessary technologies needed and present pros and cons.",
      "Help Architect Version 2 Web App.",
      "Team member that created a mono repo for Version 2 Web app.",
      "Includes internal UI, core functionalities, and Web part",
      "Conduct bug fixes for V1 and V2 Web App. Used Jest for creating Unit tests. ",
      "Used ReactJS, TypeScript and Storybook."
    ]
  },
  {
    "year": "August 2018 - September 2019",
    "company": "Get Devs",
    "title": "React Native Developer",
    "jobDescription": "<li>Team member that built Mobile Platform of Crypto Currency Exchange Wallet based in NY.</li><li>Help develop Crypto Wallet using React Native for IOS and Android platform.</li><li>Led a Team for a feature specific, trading platform area, for the Crypto Wallet.</li><li>Apply latest fundamentals of React to all Mobile Projects. Apply ES2015 and ES2016.</li><li>Diagnose and fix bugs and performance bottlenecks for performance that feels native.</li><li>Create Unit testing for Applications using Jest.</li><li>Maintain code and write automated tests to ensure the product is of the highest quality.</li><li>All projects are developed using React Native, also TypeScript and Storybook for some projects.</li>",
    "summary": [
      "Team member that built Mobile Platform of Crypto Currency Exchange Wallet based in NY.",
      "Help develop Crypto Wallet using React Native for IOS and Android platform.",
      "Led a Team for a feature specific, trading platform area, for the Crypto Wallet.",
      "Apply latest fundamentals of React to all Mobile Projects. Apply ES2015 and ES2016.",
      "Diagnose and fix bugs and performance bottlenecks for performance that feels native.",
      "Create Unit testing for Applications using Jest.",
      "Maintain code and write automated tests to ensure the product is of the highest quality.",
      "All projects are developed using React Native, also TypeScript and Storybook for some projects."
    ]
  },
  {
    "year": "November 2017 - August 2018",
    "company": "CustomThread Inc",
    "title": "ReactJS Developer",
    "jobDescription": "<li>Collaborated on the development of a comprehensive dashboard interface utilized by all company departments, streamlining workflows and significantly automating manual tasks.</li><li>Diagnosed and resolved internal issues related to department-specific dashboards, ensuring optimal functionality and user satisfaction.</li><li>Designed and implemented employee-requested tools to enhance dashboard utility and efficiency.</li><li>Developed automated tools and applications to minimize manual effort, boosting productivity across teams.</li><li>Automated the creation of critical documentation for sales, production, and logistics departments, reducing processing time and errors.</li><li>Contributed to the development of the company website (version 2) and additional web applications using modern technologies such as ReactJS and NodeJS, delivering improved performance and user experience.</li>",
    "summary": [
      "Collaborated on the development of a comprehensive dashboard interface utilized by all company departments, streamlining workflows and significantly automating manual tasks.",
      "Diagnosed and resolved internal issues related to department-specific dashboards, ensuring optimal functionality and user satisfaction.",
      "Designed and implemented employee-requested tools to enhance dashboard utility and efficiency.",
      "Developed automated tools and applications to minimize manual effort, boosting productivity across teams.",
      "Automated the creation of critical documentation for sales, production, and logistics departments, reducing processing time and errors.",
      "Contributed to the development of the company website (version 2) and additional web applications using modern technologies such as ReactJS and NodeJS, delivering improved performance and user experience."
    ]
  },
  {
    "year": "February 2017 - August 2017",
    "company": "Abinsi Solutions Group",
    "title": "Web Developer",
    "jobDescription": "<li>Upgraded internal systems, enabling the company to leverage advanced tools for enhanced employee productivity and operational efficiency.</li><li>Developed the front-end interface of an advertisement application using modern JavaScript frameworks and tools, designed to be a key offering for the company.</li><li>Modernized the company’s development framework by integrating the latest programming technologies, ensuring scalability and ease of use for future developers.</li><li>Implemented an innovative design automation tool, streamlining manual workflows for designers and significantly reducing time-to-completion for creative tasks.</li>",
    "summary": [
      "Upgraded internal systems, enabling the company to leverage advanced tools for enhanced employee productivity and operational efficiency.",
      "Developed the front-end interface of an advertisement application using modern JavaScript frameworks and tools, designed to be a key offering for the company.",
      "Modernized the company’s development framework by integrating the latest programming technologies, ensuring scalability and ease of use for future developers.",
      "Implemented an innovative design automation tool, streamlining manual workflows for designers and significantly reducing time-to-completion for creative tasks."
    ]
  },
  {
    "year": "February 2016 - December 2017",
    "company": "CustomThread Inc",
    "title": "ReactJS Developer",
    "jobDescription": "<li>Part of the team that created dashboard interface for all departments of the company that automates a lot of manual jobs.</li><li>Solved internal issues regarding the dashboard of each department.</li><li>Implemented additional tools that has been requested by employees to add in their dashboard</li><li>Reduced manual efforts by creating automated tools and applications that reduces human efforts</li><li>Automated the generation of paper works for sales, productions and logistics department.</li><li>Helped in creating the company website version 2 and other company web applications using ReactJS and NodeJS.</li>",
    "summary": [
      "Part of the team that created dashboard interface for all departments of the company that automates a lot of manual jobs.",
      "Solved internal issues regarding the dashboard of each department.",
      "Implemented additional tools that has been requested by employees to add in their dashboard",
      "Reduced manual efforts by creating automated tools and applications that reduces human efforts",
      "Automated the generation of paper works for sales, productions and logistics department.",
      "Helped in creating the company website version 2 and other company web applications using ReactJS and NodeJS."
    ]
  },
  {
    "year": "August 2014 - October 2015",
    "company": "Hewlett-Packard",
    "title": "Technical Consultant",
    "jobDescription": "<li>Served as an SAP BW Consultant, efficiently addressing technical issues related to hardware and software through client interactions and proactive notification systems.</li><li>Collaborated with cross-functional teams to troubleshoot and replicate software issues, ensuring timely and effective resolution.</li><li>Automated a manual monitoring process, reducing a 1-hour task to just 1 minute using a customized macro script, significantly improving operational efficiency.</li><li>Led a team of 5 in monitoring and resolving errors during critical data server migrations, ensuring seamless transitions and minimal downtime.</li>",
    "summary": [
      "Served as an SAP BW Consultant, efficiently addressing technical issues related to hardware and software through client interactions and proactive notification systems.",
      "Collaborated with cross-functional teams to troubleshoot and replicate software issues, ensuring timely and effective resolution.",
      "Automated a manual monitoring process, reducing a 1-hour task to just 1 minute using a customized macro script, significantly improving operational efficiency.",
      "Led a team of 5 in monitoring and resolving errors during critical data server migrations, ensuring seamless transitions and minimal downtime."
    ]
  },
  {
    "year": "January 2013 - March 2014",
    "company": "Microsoft",
    "title": "Windows 8 Ambassador",
    "jobDescription": "<li>Conducted presentations on Windows 8 capabilities and new features to diverse audiences, including students, teachers, and professionals, showcasing the benefits of the operating system.</li><li>Delivered engaging and informative sessions to share in-depth knowledge about the newly released Windows 8, effectively persuading audiences on its advantages and encouraging adoption.</li><li>Promoted Windows 8 across various schools in Manila, demonstrating its functionality and benefits, and successfully increasing awareness and interest among students and educators.</li>",
    "summary": [
      "Conducted presentations on Windows 8 capabilities and new features to diverse audiences, including students, teachers, and professionals, showcasing the benefits of the operating system.",
      "Delivered engaging and informative sessions to share in-depth knowledge about the newly released Windows 8, effectively persuading audiences on its advantages and encouraging adoption.",
      "Promoted Windows 8 across various schools in Manila, demonstrating its functionality and benefits, and successfully increasing awareness and interest among students and educators."
    ]
  }
];

export const PROJECTS = [
  { name: "90s-tv", href: "https://github.com/dczii/90s-tv", accent: "#f0b429" },
  { name: "TickrX", href: "https://github.com/dczii/TickrX", accent: "#3ee0c5" },
  { name: "BookBot", href: "https://github.com/dczii/BookBot", accent: "#c3b4ff" },
  { name: "quoteai", href: "https://github.com/dczii/quoteai", accent: "#ff9eb0" },
  { name: "qota", href: "https://github.com/dczii/qota", accent: "#d2e58a" },
  { name: "URecruitment", href: "https://github.com/dczii/URecruitment", accent: "#8ec8ff" },
] as const;

export type Project = (typeof PROJECTS)[number];

if (siteTitle !== `${siteName} | ${siteRole}`) {
  throw new Error("Role must match the existing site title");
}

if (!siteDescription.includes(sitePitch) || !siteDescription.includes(contactLine)) {
  throw new Error("Pitch and contact line must be excerpts of the existing site description");
}
