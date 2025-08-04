
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
font-size: 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 0.2rem;

`
const Alert2 = styled.div`
width: 39rem;
color: red;
font-size: 0.9rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const Space = styled.div`

height: 0.5rem;

`


const Date = ({date}) => {
  return (
    <Container>
      <Text>
        {date.start} - {date.end}
      </Text>
      <Alert>
        {date.holiday}
      </Alert>
      <Space />
      <Alert2>
        {date.holiday2}
      </Alert2>
    </Container>
  );
};

export default Date;
