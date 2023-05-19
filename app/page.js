"use client";
import Image from "next/image";
import React from "react";
import Head from "next/head";
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

// function SiteHead(
//   imgSrc,
//   imgDescription,
//   title,
//   description,
//   url,
//   twitterHandle
// ) {
//   return (
//     <Head>
//       <link rel="icon" href="/favicon.ico" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <meta name="description" content={description} />
//       <link rel="canonical" href={url} />
//       <meta
//         name="keywords"
//         content="website development, web dev, website, new zealand, palmerston north"
//       />

//       {/* OpenGraph Cards */}
//       <meta property="og:image" content={imgSrc} />
//       <meta property="og:image:alt" content={imgDescription} />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:url" content={url} />
//       <meta property="og:type" content="website" />

//       {/* twitter cards */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:image" content={imgSrc} />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:site" content={twitterHandle} />
//     </Head>
//   );
// }

// function TopNav() {
//   return (
//     <nav className={styles.topNav}>
//       <ul className={styles.navItems}>
//         <a href="/#home">
//           <li>Home</li>
//         </a>
//         <a href="/#about">
//           <li>About Me</li>
//         </a>
//         <a href="/#projects">
//           <li>Projects</li>
//         </a>
//         <a href="/#contact">
//           <li>Contact Me</li>
//         </a>
//       </ul>
//     </nav>
//   );
// }

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
      {/* <SiteHead
        imgSrc="/open-graph.png"
        imgDescription="The home page of Alex Malone's programming / website development portfolio"
        title="Alex Malone's Web Dev Portfolio"
        description="Portfolio website, showcasing the programming and web development skills and work from Alex Malone"
        url="https://adub.info"
        twitterHandle="@adub20018"
      /> */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The home page of Alex Malone's programming / website development portfolio"
        />
        <link rel="canonical" href="https://adub.info" />
        <meta
          name="keywords"
          content="website development, web dev, website, new zealand, palmerston north"
        />

        {/* OpenGraph Cards */}
        <meta property="og:image" content="/opengraph-image.png" />
        <meta
          property="og:image:alt"
          content="The home page of Alex Malone's programming / website development portfolio"
        />
        <meta property="og:title" content="Alex Malone's Web Dev Portfolio" />
        <meta
          property="og:description"
          content="Portfolio website, showcasing the programming and web development skills and work from Alex Malone"
        />
        <meta property="og:url" content="https://adub.info" />
        <meta property="og:type" content="website" />

        {/* twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/open-graph.png" />
        <meta name="twitter:title" content="Alex Malone's Web Dev Portfolio" />
        <meta
          name="twitter:description"
          content="Portfolio website, showcasing the programming and web development skills and work from Alex Malone"
        />
        <meta name="twitter:site" content="@adub20018" />
      </Head>
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
          <h2>Programmer specialising in Web Development</h2>
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
            As a passionate, self-driven individual, I&apos;m pursuing a
            Computer Science degree at Massey University. My journey into
            technology started with a year of self-taught web development, which
            lead to me deciding to further my education at university.
            <br /> <br />
            Outside of programming, I&apos;m interested in philosophy, music,
            astronomy, hiking, and gaming.
          </p>
          <h2>My Skills:</h2>
          <p className={styles.skillsText}>
            In the process of shaping my career in programming, I have gained
            experience in several technologies including:
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
            {/* <SkillCard langImgSrc={scssLogo} name="SCSS" />
            <SkillCard langImgSrc={vercelLogo} name="Vercel" /> */}
            <SkillCard langImgSrc={gitLogo} name="Git" color="#ef51324b" />
          </div>
        </div>

        <div className={styles.projects}>
          <h1 id="projects">Previous Work / Projects</h1>
          <ProjectCard
            projectImg={decentralawWebsite}
            title="Decentralawyer: Law Firm Website/Blog"
            description="I developed a website and blog for the innovative technology lawyer 'The Decentralawyer'. Leveraged the power of Astro for front-end development and used Netlify as a CMS and deployment platform."
            url="https://decentralaw.ai/"
            li1="Experience in full-stack web development using Astro and Netlify"
            li2="Hands-on practice with Netlify CMS for smooth content management"
            li3="Harnessed SVG paths to overcome CSS challenges"
          />
          <ProjectCard
            projectImg={lexfgWebsite}
            title="LexFG: Law Firm Website"
            description="Developed the website for LexFG, another tech based law firm. Again, built the front-end using Astro and deployed on Netlify."
            url="https://lexfg.netlify.app/"
            li1="Furthered development skills with Astro"
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
