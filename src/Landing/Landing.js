import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../Footer/sunje.png";
import TitleBox from "../Body/TitleBox";
import minilogo from "./logo.png";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #f2ede0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 30rem;
`;

const Button = styled.div`
  width: 20rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  background-color: #e37a6c;
  border: none;
  margin-bottom: 1.5rem;
  font-weight: 500;
  color: #f2ede0;
  cursor: pointer;
`;

const MiniLogo = styled.img`
  width: 3rem;
  height: 3rem;
  border: 1px solid #f2ede0;
  border-radius: 100%;
`;

const LeftBox = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightBox = styled.div`
  width: 15rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Landing = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/price");
  };

  return (
    <Container>
      <Logo src={logo} />
      <TitleBox />
      <Button onClick={handleNavigation}>
        <LeftBox>
          <MiniLogo src={minilogo} />
        </LeftBox>
        <RightBox>3월 혜택가 확인하기</RightBox>
      </Button>
      {/* <Button onClick={handleNavigation}>
        <LeftBox>
          <MiniLogo src={minilogo} />
        </LeftBox>
        <RightBox>4월 혜택가 확인하기</RightBox>
      </Button> */}
    </Container>
  );
};

export default Landing;
