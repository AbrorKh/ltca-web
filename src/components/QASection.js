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
        <QA variants={fade} ref={element} animate={controls} initial="hidden">
            <h2><span>FAQ</span></h2>
            <AnimateSharedLayout><Toggle title="Question 1: ......">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
                    purus libero. Nulla feugiat luctus mauris, a laoreet sapien sodales</p>
                    </div>
                </div>
            </Toggle></AnimateSharedLayout>
            <AnimateSharedLayout><Toggle title="Question 2: ......">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
                    purus libero. Nulla feugiat luctus mauris, a laoreet sapien sodales</p>

                    </div>
                </div>
            </Toggle></AnimateSharedLayout>
            <AnimateSharedLayout><Toggle title="Question 3: .......">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
                    purus libero. Nulla feugiat luctus mauris, a laoreet sapien sodales</p>

                    </div>
                </div>
            </Toggle></AnimateSharedLayout>
            <AnimateSharedLayout><Toggle title="Question 4: .......">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
                    purus libero. Nulla feugiat luctus mauris, a laoreet sapien sodales</p>
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
    }
  }
`;

export default QASection
