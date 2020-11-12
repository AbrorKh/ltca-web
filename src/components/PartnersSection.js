import React from 'react'
//Styles
import { About, Description } from "../Layout";
import styled from "styled-components";
import { fade } from "../animation";
import { useScroll } from "./useScroll";
import savodxon from '../assets/images/savodxon.svg';

const PartnersSection = () => {
  const [element, controls] = useScroll();
  return (
    <Partners
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          <span>Our partners:</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={savodxon} />
            </div>
            <p>Savodxon.uz</p>
          </Card>
          {/* Other partners: */}
          {/* <Card>
                        <div className="icon">
                            <img alt="icon" src={savodxon} />
                        </div>
                        <p>Savodxon.uz</p>
                    </Card> */}
        </Cards>
      </Description>
    </Partners>
  );
};

const Partners = styled(About)`
    h2 {
      padding-bottom: 5rem;
    }
    p {
      width: 70%;
      padding: 2rem 0rem 4rem 0rem;
    }
    
  `;
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
      justify-content: center;
    }
  `;
const Card = styled.div`
    flex-basis: 20rem;
    .icon {
      display: flex;
      align-items: center;
      h3 {
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
      }
    }
  `;

export default PartnersSection;
