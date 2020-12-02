import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';
import { TeamState } from '../teamState';

function Team() {
    const [team, setTeam] = useState(TeamState);

    return (
        <TeamStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Title variants={titleAnim} initial="hidden" animate="show" exit="exit">
                <Hide>
                    <motion.h2>
                        Team:
                    </motion.h2>
                    <div>
                        {team && (<GridSection>
                            {team.map((person) => (
                                <Card>
                                    <img src={person.Img} alt="" />
                                    <p>
                                        <a href={person.Link}>{person.Name}</a><br />
                                        {person.Role}
                                        
                                    </p>
                                </Card>
                            ))}
                        </GridSection>)}
                    </div>
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
    color: black;
    @media (max-width: 1500px) {
    margin-top: 5rem;
  }

`;

const Hide = styled.div`
    overflow: hidden;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #282828;
    font-size: 3rem;
    color: #fff;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    height: auto;
    width: 80%;
    border-radius: 4px;
    transition: all 500ms;
    // overflow: hidden;
    margin-top: 35px;
    
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    :hover{
        box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
        transform: translateY(-3px) scale(1.1);
    }
    img{
        width: 80%;
        height: auto;
        margin-top: 10px;
        overflow: hidden;
    }
    p{
        padding: 1rem;
        text-align: center;

    }
    a{
        text-decoration: underline;
        color: white;
        
    }
`;

const GridSection = styled.section`
    display: grid;
    gap: 1rem;
    padding-left: 20px;
    /* grid-template-columns: repeat(20, 1fr);  */

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

`;

export default Team;