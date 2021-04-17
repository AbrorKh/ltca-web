import React from 'react'
import { About, Description, Image, Hide } from '../Layout';
import { motion } from 'framer-motion';
import { titleAnim, fade, pictureAnim } from '../animation';
import mapimage from '../assets/images/TLhome.png'
import { useScroll } from './useScroll';

function HomeSection() {
    // const [element, controls] = useScroll();
    return (
        <About variants={fade} >
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            <span>T</span>urkic <span>I</span>nter<span>L</span>ingua 
                        </motion.h2>
                    </Hide>
                    
                </motion.div>
                <motion.p variants={fade}>
                Turkic Interlingua (TIL) is a community of researchers, Machine Learning (ML) engineers, 
                language enthusiasts and community leaders whose mission is to develop language technologies 
                (from spell checkers to translation models), collect diverse datasets, and explore linguistic phenomena 
                through the lens of academic research for Turkic languages. 
                </motion.p>
                <motion.p variants={fade}>
                Currently, our efforts are primarily focused on: <a href="https://en.wikipedia.org/wiki/Altai_language">Altai</a>, <a href="https://en.wikipedia.org/wiki/Azerbaijani_language">Azerbaijani</a>, <a href="https://en.wikipedia.org/wiki/Bashkir_language">Bashkir</a>, <a href="https://en.wikipedia.org/wiki/Shor_language">Shor</a>, <a href="https://en.wikipedia.org/wiki/Crimean_Tatar_language">Crimean Tatar</a>, <a href="https://en.wikipedia.org/wiki/Chuvash_language">Chuvash</a>, <a href="https://en.wikipedia.org/wiki/Gagauz_language">Gagauz</a>, <a href="https://en.wikipedia.org/wiki/Karakalpak_language">Karakalpak</a>, <a href="https://en.wikipedia.org/wiki/Khakas_language">Khakas</a>, <a href="https://en.wikipedia.org/wiki/Kazakh_language">Kazakh</a>, <a href="https://en.wikipedia.org/wiki/Karachay-Balkar">Karachay-Balkar</a>, <a href="https://en.wikipedia.org/wiki/Kumyk_language">Kumyk</a>, <a href="https://en.wikipedia.org/wiki/Kyrgyz_language">Kirghiz</a>, <a href="https://en.wikipedia.org/wiki/Yakut_language">Sakha (Yakut)</a>, <a href="https://en.wikipedia.org/wiki/Salar_language">Salar</a>, <a href="https://en.wikipedia.org/wiki/Turkmen_language">Turkmen</a>, <a href="https://en.wikipedia.org/wiki/Turkish_language">Turkish</a>, <a href="https://en.wikipedia.org/wiki/Tatar_language">Tatar</a>, <a href="https://en.wikipedia.org/wiki/Tuvan_language">Tuvinian</a>, <a href="https://en.wikipedia.org/wiki/Uyghur_language">Uighur</a>, <a href="https://en.wikipedia.org/wiki/Urum_language">Urum</a>, and <a href="https://en.wikipedia.org/wiki/Uzbek_language">Uzbek</a>.
                    
                However, we are eager on expanding this list to more languages. 
 
                </motion.p>


            </Description>
            <Image>
                <motion.img variants={pictureAnim} src={mapimage} alt="" style={{ borderRadius: "20px"}}/>
            </Image>
        </About>
    )
}

export default HomeSection;
