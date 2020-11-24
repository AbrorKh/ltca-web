import styled from 'styled-components';
import { motion } from 'framer-motion';

// styled comp
export const About = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color:black;
    @media (max-width: 1300px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    
    h2{
        font-weight: lighter;
    }
    p{
        font-size: 1.75rem;
        color:black;
    }
    @media (max-width: 1300px){

        padding: 0;
    }
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;
