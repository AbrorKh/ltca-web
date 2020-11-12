import React from 'react'
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';

function Team() {
    return (
        <TeamStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Title>
                <Hide>
                    <motion.h4>
                        Team:
                    </motion.h4>
                </Hide>
            </Title>
        </TeamStyle>
    )
}

const TeamStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: white;
    min-height: 90vh;
    @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: white;
    @media (max-width: 1500px) {
    margin-top: 5rem;
  }

`;

const Hide = styled.div`
    overflow: hidden;
`;
export default Team;