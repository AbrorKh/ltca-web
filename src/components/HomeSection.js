import React from 'react'
import { About, Description, Image, Hide } from '../Layout';
import { motion } from 'framer-motion';
import { titleAnim, fade, pictureAnim } from '../animation';
import mapimage from '../assets/images/ca.svg'
import { useScroll } from './useScroll';

function HomeSection() {
    // const [element, controls] = useScroll();
    return (
        <About variants={fade} >
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            Turkic Interlingua 
                        </motion.h2>
                    </Hide>
                    
                </motion.div>
                <motion.p variants={fade}>
                Turkic Interlingua (TIL) is a community of researchers, Machine Learning (ML) engineers, 
                language enthusiasts and community leaders whose mission is to develop language technologies 
                (from spell checkers to translation models), collect diverse datasets, and explore linguistic phenomena 
                through the lens of academic research for Turkic languages. 
                </motion.p>
            </Description>
            <Image>
                <motion.img variants={pictureAnim} src={mapimage} alt="" />
            </Image>
        </About>
    )
}

export default HomeSection;
