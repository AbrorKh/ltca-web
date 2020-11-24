import React from 'react';
import { About, Description, Image } from '../Layout';
import feather from '../assets/images/feather1.svg';
import { motion } from 'framer-motion';
import { pictureAnim, fade } from '../animation';
import { useScroll } from './useScroll';

function AboutSection() {
    const [element, controls] = useScroll();

    return (
        <About variants={fade} >
            <Description>
                <h2>About <span>Turkic languages</span></h2>
                <p>
                The Turkic languages are a language family of at least 35 documented languages, 
                spoken by the Turkic peoples of Eurasia from Eastern Europe, the Caucasus, 
                Central Asia and Western Asia all the way to North Asia (particularly in Siberia) and East Asia.
                Turkic languages are spoken as a native language by some 170 million people, and the total number 
                of Turkic speakers, including second language speakers, is over 200 million. 
                </p>
            </Description>
            <Image>
                <motion.img variants={pictureAnim} src={feather} alt="" />
            </Image>
        </About>
    )
}

export default AboutSection;
