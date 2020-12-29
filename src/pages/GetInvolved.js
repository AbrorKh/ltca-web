import React from "react";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from 'styled-components';

function GetInvolved() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
        
      <Bullets>
        <h2>What do we do?</h2>
        <ul>
          <li>
            We have an active Slack workspace and Telegram channel where you can
            learn about projects and find people to collaborate with
          </li>
          <li>
            Every Saturday @ 12pm (UTC−05:00), we host a community meetup where
            we welcome new members, talk about projects and discuss next steps
          </li>
          <li>
            Time to time, we host workshops on interesting topic such as this
            one: Link to Youtube
          </li>
        </ul>
        <h2>How can you contribute?</h2>
        <ul>
          <li>
            If you are a native speaker of a Turkic language, you can help us
            translate existing data or create new content! Fill out this form to
            let us know what languages you speak!
          </li>
          <li>
            If you are a coder, check out our GitHub and contribute with
            anything that can be useful to the community (scrapers, tokenizers,
            stemming tools etc)
          </li>
          <li>
            If you are a researcher or interested in research, our community is
            a great place to explore ideas in the context of Turkic languages
            and find collaborators
          </li>
        </ul>
      </Bullets>
    </motion.div>
  );
}

const Bullets = styled.div`
    padding: 5rem 10rem;
    color: black;
    min-height: 90vh;
    @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 2rem;
`

export default GetInvolved;
