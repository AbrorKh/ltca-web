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
                <h2>About <span>LTCA</span></h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam at purus libero. Nulla feugiat luctus mauris, a
                    laoreet sapien sodales sed. Nam porttitor dui at pulvinar
                    commodo. Nunc cursus, tellus vitae ornare volutpat, ipsum
                    orci aliquam neque, lacinia iaculis justo quam eget orci.
                    Maecenas rutrum consectetur libero sed fringilla. In malesuada
                    lacus enim, et euismod massa ullamcorper sit amet. Nam
                    lobortis ac elit nec euismod.
                </p>
            </Description>
            <Image>
                <motion.img variants={pictureAnim} src={feather} alt="" />
            </Image>
        </About>
    )
}

export default AboutSection;
