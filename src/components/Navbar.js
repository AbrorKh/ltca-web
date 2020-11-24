import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useLocation } from "react-router-dom";
import logo from '../assets/images/logo.png'

function Navbar() {
    const { pathname } = useLocation();
    return (
        <Navigation>
            <div id="container">
                <img src={logo} width="200" height="100" alt="" />
            </div>
            <ul>
                <li>
                    <Link to="/projects">Projects</Link>
                    <Line
                        transition={{ duration: 0.5 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/projects" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/team">Team</Link>
                    <Line
                        transition={{ duration: 0.5 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/team" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                    <Line
                        transition={{ duration: 0.5 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
                    />
                </li>
            </ul>
        </Navigation>
    )
}

const Navigation = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background: #282828;
position: sticky;
top: 0;
z-index: 10;
a {
  color: white;
  text-decoration: none;
}
ul {
  display: flex;
  list-style: none;
}
#logo {
  font-size: 2.5rem;
  font-family: 'Oswald', sans-serif;
  font-family: 'Special Elite', cursive;
  font-weight: lighter;
}
li {
  padding-left: 10rem;
  position: relative;
  font-size: 1.5rem;
  font-family: 'Oswald', sans-serif;
}
@media (max-width: 1300px) {
  flex-direction: column;
  padding: 2rem 1rem;
  #logo {
    display: inline-block;
    margin: 1rem;
  }
  ul {
    padding: 2rem;
    justify-content: space-around;
    width: 100%;
    li {
      padding: 0;
    }
  }
}
`;

const Line = styled(motion.div)`
height: 0.3rem;
background: coral;
width: 0%;
position: absolute;
bottom: -80%;
left: 60%;
@media (max-width: 1300px) {
  left: 0%;
}
`;
export default Navbar;
