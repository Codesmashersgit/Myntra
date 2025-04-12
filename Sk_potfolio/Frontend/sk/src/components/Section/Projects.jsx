import React from 'react'
import styled from 'styled-components';
import { projects } from '../../data/constants';
import { Tilt } from 'react-tilt';

const Container=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
position:relative:
z-index:1;
align-items:center;
padding-top:60px;


`;

const Wrapper=styled.div`
position:relative;
display:flex;
flex-direction:column;
width:100%;
max-width:1100px;
gap:12px;
`;

const Title=styled.div`
font-size:52px;
text-align:center;
font-weight:600;
margin-top:20px;
color:#F2F3F4;
@media(max-width:768px){
margin-top:12px;
font-size:32px;
}
`;

const Desc=styled.div`
font-size:18px;
text-align:center;
font-weight:600;
color:#F2F3F4;

@media(max-width:768px){

font-size:16px;
}
`;

const ProjectContainer=styled.div`
margin-top:40px;

`;

const Project=styled.div`


`;
const ProjectTitle=styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-left:120px;
font-size:25px;
text-align:center;
font-weight:600;
margin-top:20px;
color: #854ce6;
@media(max-width:768px){
margin-top:12px;
font-size:25px;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 margin-left:0px;
 


}
`



const ProjectList=styled.div`
display:flex;
padding:10px;
margin-left:100px;
margin-top:60px;
@media(max-width:768px){
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 margin-left:0px;
}

`;
const ProjectItem=styled.div`
display:flex;
justify-content:center;
align-items:center;
@media(max-width:768px){
 display:flex;
 flex-direction:column;
 

}





`;
const ProjectImage=styled.img`
height:300px;
width:500px;
border-radius:20px;


@media(max-width:768px){
 height:210px;
 width: 360px;


}
 `;

const ProjectDescription=styled.div`
font-size:17px;
opacity:0.7;
margin-left:60px;
text-align:justify;

@media(max-width:768px){
  margin:5px;
  font-size:15px;

 }

`;



function Projects() {
  
  return (

   
    <div>
        <Container id="Projects">
         <Wrapper>
            <Title>Projects</Title>
            <Desc>
               Here are some of my Projects
            </Desc>
            <ProjectContainer>
  {projects.map((project, index) => (
    <Project key={`skill-${index}`}>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectList>
        {project.projects.map((item, index_x) => (
          <ProjectItem key={`project-x-${index_x}`}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Tilt>
                <ProjectImage src={item.image} alt={`Image for ${item.title}`} />
              </Tilt>
            </a>
            <ProjectDescription>{item.description}</ProjectDescription>
          </ProjectItem>
        ))}
      </ProjectList>
    </Project>
  ))}


             
            </ProjectContainer>
            
        </Wrapper>
    </Container>

    </div>
  )
}

export default Projects