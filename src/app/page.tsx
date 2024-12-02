"use client";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useScroll, useSpring, motion } from "motion/react";
import { AnimatePresence } from "motion/react";

import { AnimatedMaskLogo, Footer, Preloader, WorkList } from "@z/components";

export type WorkDataType = {
  year: string;
  company: string;
  title: string;
  jobDescription: string;
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const introduction = `Hi! I'm Danilo Zabala II a dedicated front-end developer residing in Quezon City, Philippines. My expertise lies in designing and developing intuitive user interfaces for a variety of applications. From complex crypto trading platforms and secure digital wallets to corporate portfolios, convention sales systems, ticketing solutions, and library management platforms, I've consistently delivered high-quality, visually appealing, and highly functional web experiences.`;

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <AnimatePresence mode='wait'>
        <Preloader />
      </AnimatePresence>
      <div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 flex flex-col max-w-[1440px] mx-auto'>
        <main className='flex flex-col items-center w-screen'>
          <div className='sticky top-0 z-10 w-full py-10'>
            <AnimatedMaskLogo />
          </div>

          <div className='welcome-container '>
            <div className='grid grid-cols-2 items-center'>
              <motion.div
                className='text-xl font-medium text-[#d6d6d6] col-span-2 md:col-span-1'
                variants={container}
                initial='hidden'
                animate='visible'
              >
                {introduction.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    className={classNames("inline-block mr-1", {
                      "font-bold": index <= 5,
                      "font-light": index > 5,
                    })}
                    variants={wordAnimation}
                  >
                    {word}
                  </motion.span>
                ))}
                <Link href='/3d'>3D Page</Link>
              </motion.div>

              <div className='col-span-2 md:col-span-1 flex justify-end'>
                <motion.div
                  animate={{
                    opacity: 1,
                    y: [0, -50, 0], // Bounce effect after fade-in
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    opacity: {
                      duration: 2, // Duration for fade-in
                      delay: 3, // Delay fade-in by 5 seconds
                    },
                    y: {
                      duration: 3, // Bounce duration
                      repeat: Infinity, // Repeat bouncing
                      ease: "easeInOut", // Smooth bounce
                    },
                  }}
                >
                  <Image
                    src='/astronaut.png'
                    alt='logo'
                    className='z-10'
                    height={600}
                    width={600}
                  />
                </motion.div>
              </div>
            </div>
            <div className='absolute bottom-[15vh]'>
              <motion.div
                className='h-[26px] w-[19px]'
                animate={{
                  opacity: 1,
                  y: [0, -10, 0], // Bounce effect after fade-in
                }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  opacity: {
                    duration: 2, // Duration for fade-in
                    delay: 3, // Delay fade-in by 5 seconds
                  },
                  y: {
                    duration: 3, // Bounce duration
                    repeat: Infinity, // Repeat bouncing
                    ease: "easeInOut", // Smooth bounce
                  },
                }}
              >
                <svg viewBox='0 0 19 26' id='svg12111482903' className='rotate-90'>
                  <path
                    d='M 15 11 C 16.105 11 17 11.895 17 13 C 17 14.105 16.105 15 15 15 C 13.895 15 13 14.105 13 13 C 13 11.895 13.895 11 15 11 Z'
                    fill='#FFF'
                  ></path>
                  <path
                    d='M 5 1 C 6.105 1 7 1.895 7 3 C 7 4.105 6.105 5 5 5 C 3.895 5 3 4.105 3 3 C 3 1.895 3.895 1 5 1 Z'
                    fill='#FFF'
                  ></path>
                  <path
                    d='M 10 6 C 11.105 6 12 6.895 12 8 C 12 9.105 11.105 10 10 10 C 8.895 10 8 9.105 8 8 C 8 6.895 8.895 6 10 6 Z'
                    fill='#FFF'
                  ></path>
                  <path
                    d='M 5 21 C 6.105 21 7 21.895 7 23 C 7 24.105 6.105 25 5 25 C 3.895 25 3 24.105 3 23 C 3 21.895 3.895 21 5 21 Z'
                    fill='#FFF'
                  ></path>
                  <path
                    d='M 10 16 C 11.105 16 12 16.895 12 18 C 12 19.105 11.105 20 10 20 C 8.895 20 8 19.105 8 18 C 8 16.895 8.895 16 10 16 Z'
                    fill='#FFF'
                  ></path>
                </svg>
              </motion.div>
            </div>
          </div>
          {WORK_DATA.map((data) => (
            <WorkList key={data.year} {...data} />
          ))}
        </main>

        <Footer scaleX={scaleX} />
      </div>
    </>
  );
}

const WORK_DATA: WorkDataType[] = [
  {
    year: "November 2022 - Present",
    company: "The Virtual Wild",
    title: "Senior Software Frontend Engineer",
    jobDescription:
      "<li>Engineered a seamless user interface for client applications, enhancing user engagement and satisfaction.</li><li>Led the development of an advanced ticketing system with an interactive seat map selection feature.</li><li>Integrated comprehensive login and payment solutions, streamlining user experience and boosting transaction security.</li><li>Improved seat map loading time by more than 70% using cache and server side rendering.</li><li>Improved loading time and caching capability of the website dashboard  tool to be used in conventions</li>",
  },
  {
    year: "April 2022 - October 22",
    company: "SupraOracles",
    title: "Senior Software Frontend Engineer",
    jobDescription:
      "<li>Spearheaded the development of a Web 3 Wallet using React, enhancing user interaction with blockchain technologies.</li><li>Engineered seamless integration of the Wallet App with multiple blockchain networks (Ethereum, Solana, SUI, APTOS), expanding the app's market reach.</li><li>Defined and implemented robust frontend architectures, improving code maintainability and scalability.</li><li>Integrate unit testing using Jest</li>",
  },
  {
    year: "June 2021 - March 2022",
    company: "EBSCO Information Services",
    title: "Frontend Developer",
    jobDescription:
      "<li>Website UI and functionality maintenance.</li><li>Develop new component features and modules to be deployed for all sub websites.</li>",
  },
  {
    year: "August 2019 - June 2021",
    company: "Traction Tools",
    title: "Frontend Engineer",
    jobDescription:
      "<li>Built Version 2 of the company Saas software.</li><li>Discover necessary technologies needed and present pros and cons.</li><li>Help Architect Version 2 Web App.</li><li>Team member that created a mono repo for Version 2 Web app.</li><li>Includes internal UI, core functionalities, and Web part</li><li>Conduct bug fixes for V1 and V2 Web App. Used Jest for creating Unit tests. </li><li>Used ReactJS, TypeScript and Storybook.</li>",
  },
  {
    year: "August 2018 - September 2019",
    company: "Get Devs",
    title: "React Native Developer",
    jobDescription:
      "<li>Team member that built Mobile Platform of Crypto Currency Exchange Wallet based in NY.</li><li>Help develop Crypto Wallet using React Native for IOS and Android platform.</li><li>Led a Team for a feature specific, trading platform area, for the Crypto Wallet.</li><li>Apply latest fundamentals of React to all Mobile Projects. Apply ES2015 and ES2016.</li><li>Diagnose and fix bugs and performance bottlenecks for performance that feels native.</li><li>Create Unit testing for Applications using Jest.</li><li>Maintain code and write automated tests to ensure the product is of the highest quality.</li><li>All projects are developed using React Native, also TypeScript and Storybook for some projects.</li>",
  },
  {
    year: "November 2017 - August 2018",
    company: "CustomThread Inc",
    title: "ReactJS Developer",
    jobDescription:
      "<li>Collaborated on the development of a comprehensive dashboard interface utilized by all company departments, streamlining workflows and significantly automating manual tasks.</li><li>Diagnosed and resolved internal issues related to department-specific dashboards, ensuring optimal functionality and user satisfaction.</li><li>Designed and implemented employee-requested tools to enhance dashboard utility and efficiency.</li><li>Developed automated tools and applications to minimize manual effort, boosting productivity across teams.</li><li>Automated the creation of critical documentation for sales, production, and logistics departments, reducing processing time and errors.</li><li>Contributed to the development of the company website (version 2) and additional web applications using modern technologies such as ReactJS and NodeJS, delivering improved performance and user experience.</li>",
  },
  {
    year: "February 2017 - August 2017",
    company: "Abinsi Solutions Group",
    title: "Web Developer",
    jobDescription:
      "<li>Upgraded internal systems, enabling the company to leverage advanced tools for enhanced employee productivity and operational efficiency.</li><li>Developed the front-end interface of an advertisement application using modern JavaScript frameworks and tools, designed to be a key offering for the company.</li><li>Modernized the company’s development framework by integrating the latest programming technologies, ensuring scalability and ease of use for future developers.</li><li>Implemented an innovative design automation tool, streamlining manual workflows for designers and significantly reducing time-to-completion for creative tasks.</li>",
  },
  {
    year: "February 2016 - December 2017",
    company: "CustomThread Inc",
    title: "ReactJS Developer",
    jobDescription:
      "<li>Part of the team that created dashboard interface for all departments of the company that automates a lot of manual jobs.</li><li>Solved internal issues regarding the dashboard of each department.</li><li>Implemented additional tools that has been requested by employees to add in their dashboard</li><li>Reduced manual efforts by creating automated tools and applications that reduces human efforts</li><li>Automated the generation of paper works for sales, productions and logistics department.</li><li>Helped in creating the company website version 2 and other company web applications using ReactJS and NodeJS.</li>",
  },
  {
    year: "August 2014 - October 2015",
    company: "Hewlett-Packard",
    title: "Technical Consultant",
    jobDescription:
      "<li>Served as an SAP BW Consultant, efficiently addressing technical issues related to hardware and software through client interactions and proactive notification systems.</li><li>Collaborated with cross-functional teams to troubleshoot and replicate software issues, ensuring timely and effective resolution.</li><li>Automated a manual monitoring process, reducing a 1-hour task to just 1 minute using a customized macro script, significantly improving operational efficiency.</li><li>Led a team of 5 in monitoring and resolving errors during critical data server migrations, ensuring seamless transitions and minimal downtime.</li>",
  },
  {
    year: "January 2013 - March 2014",
    company: "Microsoft",
    title: "Windows 8 Ambassador",
    jobDescription:
      "<li>Conducted presentations on Windows 8 capabilities and new features to diverse audiences, including students, teachers, and professionals, showcasing the benefits of the operating system.</li><li>Delivered engaging and informative sessions to share in-depth knowledge about the newly released Windows 8, effectively persuading audiences on its advantages and encouraging adoption.</li><li>Promoted Windows 8 across various schools in Manila, demonstrating its functionality and benefits, and successfully increasing awareness and interest among students and educators.</li>",
  },
];
