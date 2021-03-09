import React from 'react'
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';
import slack from '../assets/images/slack.svg';
import email from '../assets/images/email.svg';
import telegram from '../assets/images/telegram.svg';

function Contact() {
    return (
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Title>
                <Hide>
                    <motion.h2>
                        Contact Us:
                    </motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h4>Send us an email:</h4>
                        <a href="mailto:turkicinterlingua@gmail.com"><img src={email} alt="" /></a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h4>Join our Telegram group:</h4>
                        <a href="https://t.me/joinchat/DjJzaA-Lnp4OLqszdbqNSw"><img src={telegram} alt="" /></a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h4>Join our slack channel:</h4>
                        <a href="Let’s work together in Slack! It’s a faster, simpler way to talk shop, share files, and get work done. Join here: https://join.slack.com/t/turkic-interlingua/shared_invite/zt-n36l10h1-BbmMefLQ2oKiP0kh~ntzqA"><img src={slack} alt="" /></a>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>

    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: black;
    min-height: 90vh;
    @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1500px) {
    margin-top: 5rem;
  }

`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h4 {
    margin: 2rem;
  }
  a{
      text-decoration: none;
      color: white;
  }
  img{
      width: 40%
  }
`;

export default Contact;
