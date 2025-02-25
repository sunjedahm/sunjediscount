import styled from "styled-components";

const Container = styled.div`
  height: 5rem;
  width: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: #244E37;
  font-weight: 700;
`;

const Title = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Title;
