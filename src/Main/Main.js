import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import '../App.css';
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`

const Main = () => {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
};

export default Main;
