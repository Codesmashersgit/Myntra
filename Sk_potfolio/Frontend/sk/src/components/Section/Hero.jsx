import React, { memo } from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import Images from "../../images/sk1.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {headContainerAnimation,headContentAnimation,headTextAnimation} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";
import pdf from "../../assets/new resume.pdf";



const Herocontainer = styled.div`
display:flex;
justify-content:center;
z-index:1;

@media(max-width:960px){
padding: 66px 16px;
position:relative;

}
@media(max-width:640px){
padding: 32px 16px;


}
clip-path:polygon(0 0, 100% 0, 100% 100%,70% 95%,0 100%);

`;
const HeroInnercontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding-top:90px;
  position:relative;
  @media (max-width: 960px) {
    flex-direction: column;
    padding-top:60px;
  }
`;

const Heroleftcontainer = styled.div`
  width: 100%;
  order: 1;
  color: white;
  gap: 6px;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightcontainer = styled.div`
  width: 100%;
  order: 2;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
    
  }
  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: #f2f3f4;
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 8px;
  }
`;
const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: #f2f3f4;
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;
const Span = styled.div`
  color: #854ce6;
  cursor: pointer;
`;

const Subtitle = styled.div`
    font-size:17px;
    color:#F2F3F4;
    line-height:32px;
    margin-bottom:42px;
    opacity:0.7;

     @media(max-width:640px){
     text-align:center;


    `;
const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  apperance: button;
  text-decoration: none;
  text-align:center;
  max-width: 300px;
  padding: 10px 40px;
  color:white;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 15px;
  cursor:pointer;
  margin-bottom:40px;

  &:hover{
  transform:scale(1.05);
  transition:all 0.4s ease-in-out;
  box-shadow:20px 20px 60px #1F2634,
  filter:brightness(1);
  }
   

`;
const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid #854ce6;
  margin-left: 70px;
  margin-bottom: 60px;
  padding:10px;

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
    margin: 0;
  }
`;
const HeroBg= styled.div`
position:absolute;
display:flex;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
max-width:1360px;
justify-content:end;

`;


function Hero() {
  return (
    <div id="about">
      <Herocontainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnercontainer>
            <Heroleftcontainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br />
                  {Bio.name}
                </Title>
              </motion.div>
              <TextLoop>
                I am a
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <motion.div {...headContentAnimation}>
                <Subtitle>{Bio.description}</Subtitle>
              </motion.div>
              <ResumeButton href={pdf} target="_blank">Resume</ResumeButton>
            </Heroleftcontainer>
            <HeroRightcontainer>
              <Tilt>
                <Img src={Images}></Img>
              </Tilt>
            </HeroRightcontainer>
          </HeroInnercontainer>
        </motion.div>
      </Herocontainer>
    </div>
  );
}

export default memo(Hero);
