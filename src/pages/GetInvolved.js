import React from 'react'
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import QASection from '../components/QASection';
import PartnersSection from '../components/PartnersSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

function GetInvolved() {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            
        </motion.div>
    );
}

export default GetInvolved;
