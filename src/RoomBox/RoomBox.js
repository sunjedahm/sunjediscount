import styled from "styled-components";

const Container = styled.div`
  width: 40rem;
  height: 10rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoBox = styled.div`
  width: 40rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkBox = styled.div`
  width: 35rem;
  height: 2rem;
  display: flex;
  align-items: center;
  color: red;
  font-size: 0.8rem;
`;

const LinkText1 = styled.div`
  cursor: pointer;
`;

const LinkText2 = styled.div`
  cursor: pointer;
`;

const LeftBox = styled.div`
  width: 20rem;
  height: 8rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  background-color: blue;
`;

const RightBox = styled.div`
  width: 15rem;
  height: 8rem;
  text-align: right;
  display: flex;
  flex-direction: column;
  background-color: red;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const UpperBox = styled.div`
  height: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const LowerBox = styled.div`
  height: 2rem;
  display: flex;
  width: 100%;
  text-align: right;
`;

const Cap = styled.div`
  color: #244e37;
  font-size: 0.9rem;
  font-weight: 650;
`;

const Room = styled.div`
  display: flex;
  width: 20rem;
  align-items: top;
  justify-content: left;
  font-size: 0.9rem;
`;

const Original = styled.div`
  color: #919d9d;
`;

const Price = styled.div`
  color: #ed7969;
`;

const Special = styled.div`
  width: 100%;
  text-align: right;
  display: flex;
  align-items: top;
  justify-content: right;
  font-size: 0.9rem;
`;

const handleClick = (link) => {
  if (link) {
    window.open(link, "_blank");
  }
};

const RoomBox = ({ data }) => {
  return (
    <Container>
      <InfoBox>
        <LeftBox>
          <UpperBox>
            <Title>{data.title}</Title>
            <Cap>
              (기준 {data.cap}인 / 최대 {data.maxcap}인)
            </Cap>
          </UpperBox>
          <LowerBox>
            <Room>
              방구성: ({data.size}): 퀸 사이즈 침대 {data.bed}, 욕실 {data.bath}
            </Room>
          </LowerBox>
        </LeftBox>
        <RightBox>
          <UpperBox>
            <Original>
              <del>정가: KRW {data.orignprice}</del>
            </Original>
            <Price>할인가: KRW {data.price}</Price>
            <Price>
              {data.eprice.length > 1
                ? `토요일 할인가: KRW ${data.eprice}`
                : null}
            </Price>
          </UpperBox>
          <LowerBox>
            <Special>{data.special}</Special>
          </LowerBox>
        </RightBox>
      </InfoBox>
      <LinkBox>
        <LinkText1 onClick={() => handleClick(data.link)}>
          [{data.title1} 정보 바로 가기]
        </LinkText1>
        {data.link2 != null ? (
          <LinkText2 onClick={() => handleClick(data.link2)}>
            {" "}
            &nbsp; &nbsp; [{data.title2} 정보 바로 가기]{" "}
          </LinkText2>
        ) : (
          <></>
        )}
      </LinkBox>
    </Container>
  );
};

export default RoomBox;
