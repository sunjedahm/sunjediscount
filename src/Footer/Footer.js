import styled from "styled-components"
import logo from "./sunje.png"

const Container = styled.div`

width: 70rem;
height: 20rem;
display: flex;
justify-content: center;
align-items: center;
  background-color: #f2ede0;

`

const Image = styled.img`

width: 25rem;

`

const Footer = () =>{


    return(
        <Container>

            <Image src={logo}/>

        </Container>

    )


}

export default Footer;