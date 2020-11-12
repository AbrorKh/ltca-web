import React from 'react'
import { About, Description, Image, Hide } from '../Layout';
import { motion } from 'framer-motion';
import { titleAnim, fade, pictureAnim } from '../animation';
import mapimage from '../assets/images/about.png'
import { useScroll } from './useScroll';

function HomeSection() {
    const [element, controls] = useScroll();
    return (
        <About variants={fade} animate={controls} ref={element}>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            Language Technologies
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            for <span>Central Asia</span>.
                        </motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
                    purus libero. Nulla feugiat luctus mauris, a laoreet sapien sodales
                    sed. Nam porttitor dui at pulvinar commodo. Nunc cursus, tellus vitae
                    ornare volutpat, ipsum orci aliquam neque, lacinia iaculis justo
                    quam eget orci. Maecenas rutrum consectetur libero sed fringilla.
                    In malesuada lacus enim, et euismod massa ullamcorper sit amet.
                    Nam lobortis ac elit nec euismod.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
                    purus libero. Nulla feugiat luctus mauris, a laoreet sapien sodales
                    sed. Nam porttitor dui at pulvinar commodo. Nunc cursus, tellus vitae
                    ornare volutpat, ipsum orci aliquam neque, lacinia iaculis justo
                    quam eget orci. Maecenas rutrum consectetur libero sed fringilla.
                    In malesuada lacus enim, et euismod massa ullamcorper sit amet.
                    Nam lobortis ac elit nec euismod.
                </motion.p>
            </Description>
            <Image>
                <motion.img variants={pictureAnim} src={mapimage} alt="" />
            </Image>
        </About>
    )
}

export default HomeSection;
