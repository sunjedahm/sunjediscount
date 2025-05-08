import styled from "styled-components";

const Container = styled.div`
  width: 40rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.9rem;
`;

const Info = styled.div`
  color: red;
`;

const RoomInfo = ({ date }) => {
  return (
    <Container>
      <ul>
        <li>
          해당 프로모션은 {date.start} - {date.end} 기간 체크인 시, 이용
          가능합니다. <br /> <Info>{date.holiday2}</Info>
        </li>
        <li>
          반려동물 동반은 '펫 글램핑' 예약 시에만 가능합니다. 펫 글램핑 객실을
          제외한 객실 및 캠핑 사이트에서는 반려동물 동반이 불가능합니다.{" "}
        </li>
        <li>일반 객실 체크인 시간은 15:00, 체크아웃 시간은 11:00입니다 </li>
        <li>
          24시간 이용 객실은 일요일부터 목요일까지 예약 가능하며, 체크인은
          18:00, 체크아웃은 익일 18:00입니다.{" "}
        </li>
        <li>
          객실별 기준 인원 외 추가 인원은 예약 시 반드시 기재 바라며, 추가
          인원은 현장 체크인 시 결제 요청드립니다.
          <Info>
            ※ 인원 추가 요금: 36개월 미만 무료 / 36개월 - 초등학생 2만원 /
            중학생 이상 3만원
            <br />
            ※ 인원 외 추가 침구류 요청 시, 1채당 20,000원의 추가 요금이 발생합니다.<br /><b>인원 추가 요금 지불 없이 침구류만 별도로 추가하실 수 없습니다.</b>
          </Info>
        </li>
        <li>
          화재 위험으로 글램핑 및 카라반 객실에서 화로 등 개인 화기 사용이
          불가능합니다.{" "}
        </li>
        <li>바비큐 3만원, 불멍 2만원에 현장 신청 및 결제 가능합니다.</li>
      </ul>
    </Container>
  );
};

export default RoomInfo;
