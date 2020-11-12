import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import asr from '../assets/images/speech.svg';
import lm from '../assets/images/lm.svg';
import translation from '../assets/images/translation.svg';
import scheck from '../assets/images/scheck.svg';
import { motion } from 'framer-motion';
import { pageAnimation, fade, pictureAnim, lineAnim, slider, sliderContainer } from '../animation';
import { useScroll } from '../components/useScroll';


function Projects() {
    const [element, controls] = useScroll();
    const [element1, controls1] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();


    return (
        <Project variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            {/* loader animation - no need */}
            {/* <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
                <Frame5 variants={slider}></Frame5>
            </motion.div> */}

            <Section variants={fade} animate={controls} ref={element} initial="hidden">
                <motion.h2 variants={fade}>Automatic Speech Recognition</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/projects/asr">
                    <Hide><motion.img variants={pictureAnim} src={asr} alt="" /></Hide>
                </Link>
            </Section>
            <Section variants={fade} animate={controls1} ref={element1} initial="hidden">
                <motion.h2 variants={fade}>Language Modeling</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/projects/lm">
                    <Hide><motion.img variants={pictureAnim} src={lm} alt="" /></Hide>
                </Link>
            </Section>
            <Section variants={fade} animate={controls2} ref={element2} initial="hidden">
                <motion.h2 variants={fade}>Translation</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/projects/translation">
                    <Hide><motion.img variants={pictureAnim} src={translation} alt="" /></Hide>
                </Link>
            </Section>
            <Section variants={fade} animate={controls3} ref={element3} initial="hidden">
                <motion.h2 variants={fade}>Spellchecking</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/projects/spellchecking">
                    <Hide><motion.img variants={pictureAnim} src={scheck} alt="" /></Hide>
                </Link>
            </Section>
        </Project>
    )
}

const Project = styled(motion.div)`
    min-height: 10vh;  
    overflow: hidden;
    padding: 5rem 10rem;

    @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

    h2{
        padding: 1rem 0rem;
        color: white;
    }
`;

const Section = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: coral;
        margin-bottom: 3rem;
    }
    img{
        width: 80%;
        height: 50vh;
        /* object-fit: cover; */
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

// //Frame Animation
// const Frame1 = styled(motion.div)`
//   position: fixed;
//   left: 0;
//   top: 10%;
//   width: 100%;
//   height: 100vh;
//   background: #0099b5;
//   z-index: 2;
// `;
// const Frame2 = styled(Frame1)`
//   background: #ce1126;
// `;
// const Frame3 = styled(Frame1)`
//   background: #ffffff;
// `;
// const Frame4 = styled(Frame1)`
//   background: #ce1126;
// `;
// const Frame5 = styled(Frame1)`
//   background: #1eb53a;
// `;

export default Projects;