import React from 'react'
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import QASection from '../components/QASection';
import PartnersSection from '../components/PartnersSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

function Home() {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <HomeSection />
            <AboutSection />
            <QASection />
            <PartnersSection />
            <ScrollTop />
        </motion.div>
    );
}

export default Home;
