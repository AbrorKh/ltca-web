import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { ProjectState } from '../projectState'
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

function ProjectDetail() {
    const history = useHistory();
    const url = history.location.pathname;
    const [projects, setProjects] = useState(ProjectState);
    const [project, setProject] = useState(null);

    useEffect(() => {
        const currProject = projects.filter((stateProject) => stateProject.url === url);
        setProject(currProject[0]);
    }, [projects, url]);
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            {project && (
                <Details>
                    <Headline>
                        <h2>{project.title}</h2>
                        <img src={project.mainImg} alt="project" />
                    </Headline>
                    <Body>
                        <h3>Description:</h3>
                        <section>
                            {project.description}
                        </section>
                        <p>People involved: {project.people}</p>
                    </Body>
                    <Publications>
                        {project.publications.map((pub) => (
                            <Publication
                                title={pub.title}
                                description={pub.description}
                                key={pub.title}
                            />
                        ))}

                    </Publications>
                </Details>)}
        </motion.div>
    )
}

const Body = styled(motion.div)`
    padding: 2rem 10rem;
    h3{
        font-size: 2rem;
        color: black;
    }
    p{
        color: black;
    }
    section{
        padding: 2rem 0rem;
        font-size: 1.5rem;
    }
    @media(max-width: 1500px) {
        padding: 2rem;
        font-size: 1rem;
    }
`;

const Details = styled.div`
    color: black;
`;

const Headline = styled.div`
    min-height: 60vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%)
    }
    img{
        width: 100%;
        height: 40vh;
        text-align: center;
    }
`;

const Publications = styled.div`
    min-height: 70vh;
    display: block;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const PubStyle = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: coral;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`;
const Publication = ({ title, description }) => {
    return (
        <PubStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </PubStyle>
    )
};
export default ProjectDetail
