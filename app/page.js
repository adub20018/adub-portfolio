"use client";
import Image from "next/image";
import React from "react";
import adub_pfp from "../public/adub-pfp.png";
import jsLogo from "../public/JavaScript-logo.png";
import cppLogo from "../public/cpp-logo.png";
import nextLogo from "../public/nextjs-logo.svg";
import reactLogo from "../public/react-logo.svg";
import astroLogo from "../public/astro-logo.png";
import gitLogo from "../public/git-logo.png";
import decentralawWebsite from "../public/decentralaw-website.png";
import lexfgWebsite from "../public/lexfg-website.png";
import rapGPTImg from "../public/rapGPT-img.png";
import styles from "./page.module.css";

function SkillCard({ langImgSrc, name, color }) {
  return (
    <div className={styles.skillCard}>
      <Image
        src={langImgSrc}
        alt={name}
        width={40}
        height={40}
        style={{ backgroundColor: color }}
      />
      <p>{name}</p>
    </div>
  );
}

function ProjectCard({ projectImg, title, description, url, li1, li2, li3 }) {
  return (
    <a className={styles.projectLink} href={url}>
      <div className={styles.projectCard}>
        <Image className={styles.projectImg} src={projectImg} alt={title} />
        <div className={styles.projectTextSect}>
          <h2>{title}</h2>
          <p className={styles.projectText}>{description}</p>
          <ul>
            <h4>What i learned: </h4>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
          </ul>
        </div>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>@ Alex Malone 2023 | Built with Next.js | Deployed on Vercel</p>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      {/* <TopNav /> */}
      <main id="home" className={styles.main}>
        <div className={styles.heroSection}>
          <Image
            className={styles.pfp}
            src={adub_pfp}
            alt="pixel profile picture"
            width={125}
            height={125}
          />
          <h1>Alex Malone</h1>
          <h2>Software & Website Developer</h2>
          <p>📍 New Zealand / Aotearoa</p>
          <div className={styles.heroBtnDiv}>
            <a href="https://github.com/adub20018" className={styles.heroBtn}>
              My Github
            </a>
            <a href="mailto:adubmalone@gmail.com" className={styles.heroBtn2}>
              Get in Touch
            </a>
          </div>
        </div>

        <div id="about" className={styles.about}>
          <h1>About Me</h1>
          <p className={styles.bio}>
            I&apos;m a 21 year old male, currently studying a computer science
            degree at Massey University. Outside of university, I have 1 year of
            self-taught software/website development experience, as well as 6
            months of on/off freelance experience in website development.
            <br /> <br />
            I&apos;m driven by a passion of philosophy, and its role in
            technology. Particularly the area of epistemology, the nature of
            knowledge.
          </p>
          <h2>My Skills:</h2>
          <p className={styles.skillsText}>
            In the process my career in programming, I have gained experience in
            several technologies including:
          </p>
          <h3 className={styles.skillList}></h3>
          <div className={styles.skillCardContainer}>
            <SkillCard langImgSrc={cppLogo} name="C++" color="#0159974b" />
            <SkillCard
              langImgSrc={jsLogo}
              name="JavaScript"
              color="#f0dc4d4b"
            />
            <SkillCard langImgSrc={nextLogo} name="Next.js" color="#ffffff4b" />
            <SkillCard langImgSrc={reactLogo} name="React" color="#61dafb4b" />
            <SkillCard langImgSrc={astroLogo} name="Astro" color="#3321826b" />
            <SkillCard langImgSrc={gitLogo} name="Git" color="#ef51324b" />
          </div>
        </div>

        <div className={styles.projects}>
          <h1 id="projects">Previous Work / Projects</h1>
          <ProjectCard
            projectImg={decentralawWebsite}
            title="Decentralawyer: Law Firm Website/Blog"
            description="Created a dynamic website and blog for a leading legal engineering firm. Utilized Astro, JavaScript, and SCSS. Configured on Netlify, I leveraged the git gateway, CMS, and hosting features for maximum efficiency and usability for the client."
            url="https://decentralaw.ai/"
            li1="Experience in component based web development using Astro and JavaScript"
            li2="Hands-on practice with Netlify CMS for smooth content management"
            li3="Strengthened skills in client management and project execution processes"
          />
          <ProjectCard
            projectImg={lexfgWebsite}
            title="LexFG: Law Firm Website"
            description="Developed the website for LexFG, another tech based law firm. Again, built the front-end using Astro and deployed on Netlify."
            url="https://lexfg.netlify.app/"
            li1="Furthered development skills with Astro and JavaScript"
            li2="Learned to work and communicate effectively within a larger team of clients"
            li3="Understanding the nuances of deploying sites on Netlify platform"
          />
          <ProjectCard
            projectImg={rapGPTImg}
            title="RapGPT: OpenAI Rap Lyric Generator"
            description="Designed and built RapGPT, an application leveraging OpenAI API to generate rap lyrics based on user-provided context. Utilized Next.js and React for the application's development, and deployed on Vercel."
            url="https://rapgpt.netlify.app"
            li1="Acquired knowledge in using APIs."
            li2="Furthered experience with Next.js and React"
            li3="Gained experience in AI prompt engineering"
          />
        </div>

        <div id="contact" className={styles.contact}>
          <h1>Let&apos;s Talk!</h1>
          <p>
            Don&apos;t hesitate to contact me for any questions, proposals, or
            projects you want to work together on
          </p>
          <a href="mailto:adubmalone@gmail.com">Send me an Email!</a>
        </div>
        <Footer />
      </main>
    </>
  );
}
