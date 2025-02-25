import data from "../source/date.json";
import styled from "styled-components"

const Container = styled.div`

width: 45rem;
height: 10rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-left: 2rem;
padding-right: 2rem;
  box-sizing: border-box; 

`

const Text = styled.div`

width: 45rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
font-size: 1.2rem;

`
const Alert = styled.div`
width: 39rem;
color: red;
font-size: 0.9rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`


const Date = () => {
  return (
    <Container>
      <Text>
        {data.start} - {data.end}
      </Text>
      <br />
      <Alert>
        {data.holiday}
      </Alert>
      <Alert>
        {data.holiday2}
      </Alert>
    </Container>
  );
};

export default Date;
