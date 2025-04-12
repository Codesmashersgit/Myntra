import React, { useState } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Bio } from "../data/constants";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Nav = styled.div`
  height: 80px;
  background-color: #090917;
  display:flex;
  align-items:center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  font-size: 1rem;
  
`;

const NavbarContainer = styled.div`
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  
  
`;
const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  text-decoration: none;
  color: #f2f3f4;
  font-size:18px;
`;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #f2f3f4;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2 ease in-out;
  text-decoration: none;
  &:hover {
    color: #854ce6;
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid #854ce6;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  color: #f2f3f4;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background-color: #854ce6;
    color: #f2f3f4;
  }
`;
const MobileIcon= styled.div`
    height:100%;
    display:flex;
    align-items:center;
    display:none;
 @media screen and (max-width: 768px) {
    display: block;
  }
`;
const MobileMenu=styled.ul`
 width: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  padding:12px 40px 24px 40px;
  background-color:#090917;
  position:absolute;
  top:80px;
  right:0;
  width:100%;
  transition:all 0.6s ease-in-out;
  transform:${({isOpen})=>
    isOpen ? "translateY(0)": "translateY(-100%)"};
  border-radius:0 0 20px 20px;
  box-shadow:0 0 10px 0 rgba(0,0,0,0.2);
  opacity:${({isOpen})=>(isOpen?"100%":"0")};
  z-index:${({isOpen})=>(isOpen?"1000":"-1000")};
  }

  }
`;
function Navbar() {
  const[isOpen,setOpen]=useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Portfolio</NavLogo>
        <MobileIcon onClick={()=>setOpen(!isOpen)}>
          <MenuRoundedIcon/>
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Contacts">Contact</NavLink>
        </NavItems>
        {isOpen &&
         (<MobileMenu isOpen={isOpen}>
          <NavLink onClick={()=>setOpen(!isOpen)} href="#about">About</NavLink>
          <NavLink onClick={()=>setOpen(!isOpen)} href="#Skills">Skills</NavLink>
          <NavLink onClick={()=>setOpen(!isOpen)} href="#Projects">Projects</NavLink>
          <NavLink onClick={()=>setOpen(!isOpen)} href="#Contacts">Contact</NavLink>
          <GithubButton href={Bio.github} target="blank">
            Github Profile
          </GithubButton>
          </MobileMenu>)}
        <ButtonContainer>
          <GithubButton href={Bio.github} target="blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
