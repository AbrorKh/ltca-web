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
        <h2>Connecting with the community</h2>
        <ul>
          <li>
            We have an active <a href="https://join.slack.com/t/turkic-interlingua/shared_invite/zt-n36l10h1-BbmMefLQ2oKiP0kh~ntzqA">Slack workspace</a> and Telegram channel where you can
            learn about projects and find people to collaborate with!
          </li>
          <li>
            Every Sunday @ 1pm (UTC−05:00), we host a community meetup where
            we welcome new members, talk about projects and discuss next steps. You can join the meeting <a href="https://meet.google.com/pih-fbrg-kja">here</a>! 
          </li>
          <li>
            Time to time, we host workshops on interesting topic such as this
            one (<a href="https://www.youtube.com/watch?v=-UpqTGVYzYw&feature=youtu.be">Machine Translation with JoeyNMT!</a>)
          </li>
        </ul>
        <br/>
        <h2>Contributing & Getting Involved</h2>
        <ul>
          <li>
            If you are a native speaker of a Turkic language, you can help us
            translate existing data or create new content! Fill out <a href="https://forms.gle/4qogaxAKDGixbuYm7s">this form</a> to
            let us know what languages you speak!
          </li>
          <li>
            If you are a coder, check out our <a href="https://github.com/turkic-interlingua/software-tools">GitHub</a> and contribute with
            anything that can be useful to the community (scrapers, tokenizers,
            stemming tools etc)!
          </li>
          <li>
            If you are a researcher or interested in research, our community is
            a great place to explore ideas in the context of Turkic languages
            and find collaborators!
          </li>
        </ul>
      </Bullets>
    </motion.div>
  );
}

const Bullets = styled.div`
    padding: 5rem 10rem;
    margin-left: 10px;
    color: black;
    min-height: 90vh;
    font-size: 2rem;
    h2 {
        font-size: 2rem;
    }
    li {
        margin-bottom: 10px;
        margin-top: 10px;
        margin-left: 50px;
        font-size: 1.5rem;
        font-family: 'Abel', sans-serif;
        font-weight: lighter;
        color: black
    }
    @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
`

export default GetInvolved;
