import styled from 'styled-components'
import chatimage from '../source/chat.png'

const Container = styled.div`
  width: 40rem;
  height: 21rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
font-size: 0.9rem;
`




const ButtonContainer = styled.div`

width: 40rem;
height: 3rem;
display: flex;
justify-content: left;
padding-left: 2rem;
box-sizing: border-box;
align-items: center;

`


const TalkButton = styled.div`

cursor: pointer;
width: 15rem;
height: 2rem;
background-color: #24e864;
border-radius: 5rem;
display: flex;

`

const TalkImage = styled.img`

width: 2rem;
height: 2rem;


`

const TalkText = styled.div`

width: 12rem;
height: 2rem;
display: flex;
align-items: center;
justify-content: center;


`

const handleClick = (link) => {
  if (link) {
    window.open(link, "_blank");
  }
};


const ResrveInfo = () => {
  return (
    <Container>
      예약 문의: 평일 10:00-18:00에 상담 가능합니다.
      <ul>
        <li>전화 010-7683-6220으로 예약하실 수 있습니다.</li>
        <li>이메일 info@sunjedahm.com으로 예약하실 수 있습니다. </li>
        <li>
          하단에 '네이버 톡톡 문의하기' 클릭하여 예약하실 수 있습니다.{" "}
        </li>
      </ul>
      <ButtonContainer>
        <TalkButton onClick={() => handleClick("https://talk.naver.com/ct/w4kb8o4?frm=mnmb&frm=nmb_detail#nafullscreen")}> 

          <TalkImage src={chatimage} />
          <TalkText>네이버 톡톡 문의</TalkText>

        </TalkButton>
      </ButtonContainer>
      예약 절차
      <ul>
        <li>예약 시 재직 중인 회사를 알려주시기 바랍니다.</li>
        <li>
          객실 예약 시 5만원의 사전 예약금을 지불하셔야 하며, 차액은 체크인 시 현장에서 결제하시면 됩니다. 
          <br />
         입금 관련 상세 내용은 상담 후 안내받으실 수 있습니다. {" "}
        </li>
        <li>
        전화, 이메일 또는 네이버 톡톡으로 예약 요청을 주시면 검토 후 예약 확정 관련 내용을 안내드리겠습니다.
        </li>
        <li>
        일정 변경으로 방문이 어려운 경우에는 반드시 사전에 연락해 주시기 바랍니다. 예약금은 10일 전까지 전액 환불되며, 이후에는 숙소 정책에 따라 차등 환불됩니다.{" "}
        </li>
      </ul>
    </Container>
  );
};

export default ResrveInfo;
