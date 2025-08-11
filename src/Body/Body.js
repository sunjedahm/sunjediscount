import styled from "styled-components";
import RoomBox from "../RoomBox/RoomBox";
import TitleBox from "./TitleBox";
import ReserveInfo from "../RoomBox/ReserveInfo";
import RoomInfo from "../RoomBox/RoomInfo";
import Data from "../source/roominformation.json";
import Data2 from "../source/roominformation2.json";
import Data3 from "../source/roominformation3.json";
import Date from "../Date/Date";
import DateData from "../source/date.json";
import DateData2 from "../source/date2.json";
import DateData3 from "../source/date3.json";
import DateData4 from "../source/date4.json";
import Title from "./Title";
import caravan from "../source/caravan_img.jpg";
import forest from "../source/forest_img.jpg";
import ocean from "../source/ocean_img.jpg";
import pet from "../source/dog_img.jpg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Container = styled.div`
  width: 70rem;
  padding-bottom: 4rem;
  background-color: #f2ede0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 35rem;
  height: 15rem;
  overflow: hidden;
  margin-bottom: 2rem;
  object-fit: cover;
`;

const Row = styled.div`
  height: ${(props) => props.height};
  width: 55rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hr = styled.div`
  width: ${(props) => props.width};
  border-bottom: 1px solid black;
`;

const LeftBox = styled.div`
  width: 10rem;
  height: ${(props) => props.height};
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eacab1;
  color: #f2ede0;
  font-weight: 700;
  font-size: 1.3rem;
`;

const RightBox = styled.div`
  width: 45rem;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-sizing: inline;
  box-sizing: border-box;
`;

const EmptyBox = styled.div`
  height: 2.5rem;
`;

// const Add = styled.div`

// height: 1.5rem;
// width: 40rem;
// display: flex;
// align-items: center;
// justify-content: center;
// margin-bottom: 1rem;
// color: #244E37;

// `

const Body = () => {
  const location = useLocation();
  const { month } = location.state || {};

  const dataMap = {
    sep: Data,
    jun: Data2,
    jul2: Data3,
    aug: Data2,
  };

  const dateMap = {
    sep: DateData,
    jun: DateData2,
    jul2: DateData3,
    aug: DateData4,
  };

  const [data, setData] = useState(Data);
  const [date, setDate] = useState(DateData);

  useEffect(() => {
    setData(dataMap[month] || Data);
    setDate(dateMap[month] || DateData);
  }, [month]);

  console.log(data[0]);

  return (
    <>
      <Container>
        <EmptyBox />
        <TitleBox text="감성 럭셔리 리조트 선재담이 제휴사 고객님을 위해 특별한 혜택을 마련했습니다." />
        <EmptyBox />

        <Hr width="55rem" />
        <Row height="10rem">
          <LeftBox height="10rem">혜택 기간</LeftBox>
          <RightBox height="10rem">
            <Date date={date} />
          </RightBox>
        </Row>

        <Row height="160rem">
          <LeftBox height="160rem">특별 요금</LeftBox>
          <RightBox height="160rem">
            <Title text="CARAVAN" />

            <Image src={caravan} />
            <RoomBox key="0" data={data[0]} month={month} />
            <RoomBox key="1" data={data[1]} month={month} />

            <Hr width="40rem" />
            <Title text="PARK & FOREST GLAMPING" />
            <Image src={forest} />
            <RoomBox key="2" data={data[2]} month={month} />
            <RoomBox key="3" data={data[3]} month={month} />
            <RoomBox key="5" data={data[4]} month={month} />

            <Hr width="40rem" />
            <Title text="PET GLAMPING" />

            <Image src={pet} />
            <RoomBox key="6" data={data[5]} month={month} />

            <Hr width="40rem" />
            <Title text="OCEAN VIEW GLAMPING" />
            <Image src={ocean} />
            <RoomBox key="7" data={data[6]} month={month} />
            <RoomBox key="8" data={data[7]} month={month} />
            <RoomBox key="9" data={data[8]} month={month} />
          </RightBox>
        </Row>

        <Row height="17rem">
          <LeftBox height="17rem">유의 사항</LeftBox>
          <RightBox height="17rem">
            <RoomInfo date={date} />
          </RightBox>
        </Row>

        <Row height="22rem">
          <LeftBox height="22rem">예약 문의</LeftBox>
          <RightBox height="22rem">
            <ReserveInfo />
          </RightBox>
        </Row>
      </Container>
    </>
  );
};

export default Body;
