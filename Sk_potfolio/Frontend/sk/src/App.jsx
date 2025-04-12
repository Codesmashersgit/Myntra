import styled from "styled-components";
import Nav from './components/Navbar'
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Hero from "./components/Section/Hero";
import Skills from "./components/Section/Skills";
import StartCanvas from './components/canvas/Stars';
import Projects from './components/Section/Projects';
import Contacts from "./components/Section/Contacts";


const Body=styled.div`
background-color:#090917;
color:#F2F3F4;
width:100%;
overflow-x:hidden;
position:relative;

`;

const Wrapper=styled.div`
padding-bottom:100px;
background:linear-gradient(
38.73deg,
rgba(204,0,187,0.15) 0%,
rgba(201,32,184,0) 50%
),
linear-gradient(
141.27deg,
rgba(0,70,209,0) 50%,
rgba(0,70,209,0.15) 100%
);
width:100%;
clip-path:polygon(0 0,100% 0,100% 100%,30% 98%, 0 100%);

`;
function App(){
  return (
  <>

  <BrowserRouter>
  <Nav/>
  <Body>
   
    <StartCanvas/>
    <div>
  <Hero/>
  <Wrapper>
  <Skills/>
  </Wrapper>
  <Wrapper>
    <Projects/>
  </Wrapper>
  <Wrapper>
    <Contacts/>
  </Wrapper>

    </div>
  </Body>
  </BrowserRouter>

  </>
  );
}

export default App