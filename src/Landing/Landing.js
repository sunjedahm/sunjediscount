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
  width: 24rem;
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
  width: 19rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Landing = () => {
  const navigate = useNavigate();

  // const handleNavigation = (month) => {
  //   navigate("/price", { state: { month } });
  // };

  const handleNavigation = () => {

    window.open('https://booking.naver.com/booking/3/bizes/1247314', '_blank');
  }

  return (
    <Container>
      <Logo src={logo} />
      {/* <TitleBox text="감성 럭셔리 리조트 선재담이 제휴사 고객님을 위해 특별한 혜택을 마련했습니다." /> */}
      <TitleBox text="※ 단체 워크숍 문의는 032-880-9903" />

      <br />
      <Button onClick={() => handleNavigation("jun")}>
        <LeftBox>
          <MiniLogo src={minilogo} />
        </LeftBox>
        <RightBox>네이버예약에서 객실 예약하기</RightBox>
      </Button>

      <TitleBox text="※ 현재 26년 1월 ~ 4월 선재담 할인 이벤트로 네이버예약 단가가 임직원 예약 단가보다 낮습니다" />
      <TitleBox text="선재담 방문 희망하실 경우 네이버 예약 통해 예약 부탁드립니다" />
      {/* <Button onClick={() => handleNavigation("jul2")}>
        <LeftBox>
          <MiniLogo src={minilogo} />
        </LeftBox>
        <RightBox>7월 26일 ~ 8월 16일 혜택가 확인하기</RightBox>
      </Button> */}
      {/* <Button onClick={() => handleNavigation("aug")}>
        <LeftBox>
          <MiniLogo src={minilogo} />
        </LeftBox>
        <RightBox>8월 17일 ~ 8월 31일 혜택가 확인하기</RightBox>
      </Button> */}

    </Container>
  );
};

export default Landing;
