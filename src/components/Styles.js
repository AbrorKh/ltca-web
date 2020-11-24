import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  background: coral;
}

::-webkit-scrollbar-track {
  background: #fff;
}

body{
    background: #F0F5FF;
    font-family: 'Oswald', sans-serif;
    overflow-x: hidden;
    scrollbar-face-color: coral;
    scrollbar-track-color: #fff
}

button{
    font-weight: bold;
    font-size: 1.1.rem;
    font-family: 'Oswald', sans-serif;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid coral;
    background: transparent;
    color: black;
    transition: all 0.5s ease;
    &:hover{
        background-color: coral;
        color: white;
    }
}

h2{
    font-weight: lighter;
    font-size: 4rem;
}

h3{
    color: white;
}

h4{
    font-weight: bold;
    font-size: 2rem;
}

span{
    font-weight: bold;
    color: coral
}

p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}


`;

export default Styles;