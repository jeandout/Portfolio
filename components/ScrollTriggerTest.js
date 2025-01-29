import styles from '../Styles/ScrollTriggerTest.module.css';
import React from 'react';
import { useRef } from 'react';

import data from "../public/CV.json";

const { gsap } = require("gsap/dist/gsap");
const { useGSAP } = require("@gsap/react/dist");

const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");


gsap.registerPlugin(useGSAP, ScrollTrigger);

function ScrollTriggerTest() {

  const container = useRef();
const orange = useRef();
const purple = useRef();
const green = useRef();


  useGSAP(() => {
    gsap.defaults({ ease: "none", duration: 2 });

    const tl = gsap.timeline();
    tl.from(orange.current, {xPercent: -100})
      .from(purple.current, {xPercent: 100})
      .from(green.current, {yPercent: -100});
    
    // pin the container and link the animation to the scrollbar (scrub: true). We could easily embed this in the gsap.timeline() to shorten things a bit, but this is to show that you can create the ScrollTrigger separately if you prefer. 
    ScrollTrigger.create({
      animation: tl,
      trigger: container.current,
      start: "top top",
      end: "+=4000", 
      scrub: true,
      pin: true,
      anticipatePin: 1
    });
    
  })

  return (

    <div>
      <div className={` ${styles.panel} ${styles.blue}`}>
        <div><h1>Slide-in panels</h1>
          <p>A simple animation linked to a ScrollTrigger with <code>scrub: true</code> creates a nifty effect.</p>
          <div class="scroll-down">Scroll down<div class="arrow"></div></div>
        </div>
      </div>

      <div className={styles.container} ref={container}>
        <section class={`${styles.panel} ${styles.red}`}>
          ONE
        </section>
        <section class={`${styles.panel} ${styles.orange}`} ref={orange}>
          TWO
        </section>
        <section class={`${styles.panel} ${styles.purple}`} ref={purple}>
          THREE
        </section>
        <section class={`${styles.panel} ${styles.green}`} ref={green}>
          FOUR
        </section>

      </div>

    </div>





  );
}

export default ScrollTriggerTest;
