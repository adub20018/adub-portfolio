import Image from "next/image";
import React from "react";
// import ContactForm from "./components/ContactForm.js";
import adub_pfp from "../public/adub-pfp.png";
import jsLogo from "../public/JavaScript-logo.png";
import cppLogo from "../public/cpp-logo.jpg";
import nextLogo from "../public/nextjs-logo.png";
import reactLogo from "../public/react-logo.png";
import astroLogo from "../public/astro-logo.png";
import gitLogo from "../public/git-logo.png";
import vercelLogo from "../public/vercel-logo.png";
import scssLogo from "../public/scss-logo.png";
import decentralawWebsite from "../public/decentralaw-website.png";
import lexfgWebsite from "../public/lexfg-website.png";
import rapGPTImg from "../public/rapGPT-img.png";
import styles from "./page.module.css";

function TopNav() {
  return (
    <nav className={styles.topNav}>
      <ul className={styles.navItems}>
        <li>Home</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function SkillCard({ langImgSrc, name }) {
  return (
    <div className={styles.skillCard}>
      <Image src={langImgSrc} alt={name} width={40} height={40} />
      <p>{name}</p>
    </div>
  );
}

function ProjectCard({
  projectImg,
  title,
  description,
  url,
  li1,
  li2,
  li3,
  li4,
}) {
  return (
    <button href={url} className={styles.projectCard}>
      <Image src={projectImg} alt={title} height={400} />
      <div className={styles.ProjectTextSect}>
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>What i learned: </h4>
        <ul>
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
          <li>{li4}</li>
        </ul>
      </div>
    </button>
  );
}

export default function Home() {
  return (
    <>
      <TopNav />
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <Image
            className={styles.pfp}
            src={adub_pfp}
            alt="pixel profile picture"
            width={125}
            height={125}
          />
          <h1>Alex Malone</h1>
          <h2>Programmer specialising in Web Development</h2>
          <p>📍 New Zealand / Aotearoa</p>
          <button className={styles.heroBtn}>Get in touch</button>
        </div>

        <div className={styles.skills}>
          <h1>About Me</h1>
          <p className={styles.bio}>
            I&apos;m a 21 year old male from New Zealand, currently studying
            computer science. I had been self-teaching web development for 1
            year before deciding to further my education at Massey University.
            <br /> <br />
            Outside of programming, I&apos;m interested in astronomy,
            philosophy, hiking, and gaming
            <br />
            <br />
            Here are a few technologies I&apos;ve been working with:
          </p>
          <h3 className={styles.skillList}></h3>
          <div className={styles.skillCardContainer}>
            <SkillCard langImgSrc={cppLogo} name="C++" />
            <SkillCard langImgSrc={jsLogo} name="JavaScript" />
            <SkillCard langImgSrc={nextLogo} name="Next.js" />
            <SkillCard langImgSrc={reactLogo} name="React" />
            <SkillCard langImgSrc={astroLogo} name="Astro" />
            {/* <SkillCard langImgSrc={scssLogo} name="SCSS" />
            <SkillCard langImgSrc={vercelLogo} name="Vercel" /> */}
            <SkillCard langImgSrc={gitLogo} name="Git" />
          </div>
        </div>

        <div className={styles.projects}>
          <h1>Projects</h1>
          <ProjectCard
            projectImg={decentralawWebsite}
            title="Decentralaw Law Firm Website"
            description="I used Astro to create the website and blog for the Decentralaw Law Firm. Used Netlify for hosting and as the content management system"
            url="https://decentralaw.ai/"
            li1="Learned Astro framework"
            li2="Learned how to work with CMS"
            li3="Learned how to work with cloud hosting solutions"
            li4="Learned how to use lighthouse tests"
          />
          <ProjectCard
            projectImg={lexfgWebsite}
            title="LexFG Law Firm Website"
            description="After the last site, i was reapproached to develop another website, this time for the LexFG Law Firm."
            url="https://lexfg.netlify.app/"
            li1="Furthered knowledge of Astro framework"
            li2="Learned lessons of working with a group of customers"
            li3=""
            li4=""
          />
          <ProjectCard
            projectImg={rapGPTImg}
            title="GPT-3 Rap Lyric Generator"
            description="I used the OpenAI API and Next.js to create this rap lyric generator."
            url="https://rapgpt.netlify.app"
            li1="Learned how to work with API's"
            li2="Gained experience in AI prompt engineering"
            li3="Learned how to harness the power of Vercel x Next.js"
          />
        </div>

        <div className={styles.contact}>
          <h1>Contact Me!</h1>
          {/* <ContactForm /> */}
        </div>
      </main>
    </>
  );
}
