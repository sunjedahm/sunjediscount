import styled from "styled-components";
import mainImage from '../source/main_img.jpg';

const Container = styled.div`

width: 70rem;
height: 40rem;
  overflow: hidden;
  position: relative;

`

const BackgroundImage = styled.img`

width: 100%;
height: 100%;
 object-fit: cover;


`

const TextOverlay = styled.div`
  color: white; 
  font-size: 2.7rem; 
  text-align: center; 
   margin-top: -9rem;
   font-weight: 500;
   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const Title = styled.div`

word-spacing: -5px;



`

const Header = () =>{

    return(

        <Container>
            <BackgroundImage src={mainImage}/>
            <TextOverlay><Title>SUN JE DAHM</Title> SPECIAL PROMOTION</TextOverlay>

        </Container>


    )
    


}

export default Header;