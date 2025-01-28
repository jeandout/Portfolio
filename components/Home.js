import styles from '../styles/Home.module.css';
import React from 'react';
import { useRef } from 'react';

import data from "../public/CV.json";

const { gsap } = require("gsap/dist/gsap");
const { useGSAP } = require("@gsap/react/dist");
  
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");


gsap.registerPlugin(useGSAP,ScrollTrigger);

function Home() {

  const container = useRef();


  useGSAP(() => {
    gsap.defaults({ ease: "none", duration: 2 });

    const t1 = gsap.timeline();
    t1.from(".bgRed", { xPercent: -100 }).from(".bgBlue", { xPercent: 100 }).from(".bgGreen", { yPercent: -100 });

    ScrollTrigger.create({
      animation: t1,
      trigger: container.current,
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1
    });

  })

  return (
    <div ref={container} >
      <header className={`${styles.section} ${styles.bgRed}`}>
        <h1>{data.user.firstname} {data.user.name}</h1>
        <h2 >{data.cvTitle}</h2>
      </header>
      <main >
        <section className={`${styles.section} ${styles.bgBlue}`}>
          <p>{data.profil}</p>
        </section>
        <section className={`${styles.section} ${styles.bgGreen}`}>
          <p>{data.profil}</p>
        </section>
      </main>
    </div>
  );
}

export default Home;
