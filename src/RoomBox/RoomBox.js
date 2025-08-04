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
  height: 6rem;
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
  height: ${(props) => (props.isEprice ? "6rem" : "5rem")};
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const RightBox = styled.div`
  width: 15rem;
  height: ${(props) => (props.isEprice ? "6rem" : "5rem")};
  text-align: right;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const Cap = styled.div`
  color: #244e37;
  font-size: 0.9rem;
  font-weight: 650;
`;

const Room = styled.div`
  display: flex;
  width: 20rem;
  justify-content: left;
  font-size: 0.9rem;
`;

const Original = styled.div`
  color: #919d9d;
`;

const Price = styled.div`
  color: ${(props) => props.colour};
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

const RoomBox = ({ data, month }) => {
  return (
    <Container>
      <InfoBox>
        <LeftBox isEprice={data.eprice.length > 1}>
          <Title>{data.title}</Title>
          <Cap>
            (기준 {data.cap}인 / 최대 {data.maxcap}인)
          </Cap>

          <Room>
            방구성: ({data.size}): 퀸 사이즈 침대 {data.bed}, 욕실 {data.bath}
          </Room>
        </LeftBox>
        <RightBox isEprice={data.eprice.length > 1}>
          {/* <PriceBox>
            <Original>
              <del>정가: KRW {data.orignprice}</del>
            </Original>
            <Price colour="#ed7969">
              {data.eprice.length > 1
                ? ` 평일(일-목): KRW ${data.price}`
                : `금액: KRW ${data.price}`}
            </Price>
            <Price colour="#183425">
              {data.eprice.length > 1
                ? ` 주말(금-토): KRW ${data.eprice}`
                : null}
            </Price>
          </PriceBox> */}
          <PriceBox>
            <Original>
              <del>정가: KRW {data.orignprice}</del>
            </Original>
            <Price colour="#ed7969">
              {month != 'jun'
                ? ` 평일(일-목): KRW ${data.price}`
                : `평일(일-금): KRW ${data.price}`}
            </Price>
            <Price colour="#183425">
              {month != 'sep'
                ? ` 주말(금-토): KRW ${data.eprice}`
                : ` 토요일: KRW ${data.eprice}`}
            </Price>
          </PriceBox>
          <Special>{data.special}</Special>
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
