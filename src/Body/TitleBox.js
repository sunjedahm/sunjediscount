import styled from 'styled-components'


const Container = styled.div`

width: 70rem;
height: 5rem;
display: flex;
align-items: center;
justify-content: center;
color: #244E37;
font-size: 1.2rem;

`


const TitleBox = ({text}) =>{

    return(
        <Container >
            <b> {text} </b>
        </Container>

    )




}

export default TitleBox;