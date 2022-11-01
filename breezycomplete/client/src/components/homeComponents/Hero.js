import React from 'react'
import styled from 'styled-components'
import HeroBgImg from '../../../src/heroImg.jpg'

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 300px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  font-size: 70px;
  text-align: center;
`;


const HeroP = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

const HeroBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: #D8BBA9;
  color: black;
  cursor: pointer;
`;


const Hero = () => {
  return (
    <HeroContainer>

    <HeroBg>
        <Image src={HeroBgImg}/>
      </HeroBg> 

      <HeroContent>
        <HeroH1>WELCOME</HeroH1>
        <HeroP>
          Real comfort, visual and physical, is vital to every room 
        </HeroP>
        <HeroBtn>
          <Button>SHOP NOW</Button>
        </HeroBtn>
      </HeroContent>

    </HeroContainer>
  )
}

export default Hero