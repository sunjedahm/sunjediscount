import styled from 'styled-components'


const Container = styled.div`

width: 70rem;
height: 10rem;
display: flex;
align-items: center;
justify-content: center;
color: #244E37;
font-size: 1.2rem;

`


const TitleBox = () =>{

    return(
        <Container >
            <b>감성 럭셔리 리조트 선재담이 제휴사 고객님을 위해 특별한 혜택을 마련했습니다. </b>
        </Container>

    )




}

export default TitleBox;