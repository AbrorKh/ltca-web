import React, { useState } from 'react';
import styled from 'styled-components';
import { About } from '../Layout';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll'
import { fade } from '../animation';

function QASection() {
    const [qaToggle, setQAToggle] = useState(false);
    const [element, controls] = useScroll();

    return (
        <QA variants={fade}  initial="hidden">
            <h2><span>FAQs</span></h2>
            <AnimateSharedLayout><Toggle title="1. How can I join the community?">
                <div className="question">
                    <div className="answer">
                        <p>The best way to learn more about the community and get involved would be through our <a href="https://join.slack.com/t/ltca-workspace/shared_invite/zt-j40lwcbo-5KcEJOz2ZGenP9fo5WFq4Q">Slack</a> workspace!</p>
                    </div>
                </div>
            </Toggle></AnimateSharedLayout>
            <AnimateSharedLayout><Toggle title="2. Can I join a specific project that I am interested?">
                <div className="question">
                    <div className="answer">
                        <p>Yes, absolutely! Join our Slack channel and reach out to the team lead of that project. Team leads are listed in the Projects section of this website.</p>
                    </div>
                </div>
            </Toggle></AnimateSharedLayout>
            <AnimateSharedLayout><Toggle title="3. I don't have NLP or ML experience, how can I contribute?">
                <div className="question">
                    <div className="answer">
                        <p>There are so many ways you can contribute even though you are not familiar with NLP and ML (yet)! If you speak a Turkic language, chances are you can help us with evaluating our datasets and providing linguistic support. This way, you can get introduced to the area and learn from more experienced members of the community.</p>
                    </div>
                </div>
            </Toggle></AnimateSharedLayout>
            <AnimateSharedLayout><Toggle title="4. I don't see a project that I am interested in. Can I start my own?">
                <div className="question">
                    <div className="answer">
                        <p>100%! It is encouraged that you take the lead and start NLP related projects in the community that might be of interest to you. Join our Slack channel and read the steps described in the #general channel on how you can do that. </p>
                    </div>
                </div>
            </Toggle></AnimateSharedLayout>
        </QA>
    )
}

const QA = styled(About)`
    display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
      color: black;
    }
    a{
        text-decoration: none;
        color: coral;
    }
  }
`;

export default QASection
