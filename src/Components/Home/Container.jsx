import { Link } from "react-router-dom"
import { styled } from "styled-components"

const Container = ({image, alt, title, description, category })=>{
return (
    <Wrapper>
        <ImgWrapper>
        <img src ={image} alt={alt} style={{width: "100%", height: "100%", objectFit: "cover"}}></img>
        </ImgWrapper>
        <TextWrapper>
            <h4>{category}</h4>
            <h2>{title}</h2>
            <p>{description}</p>
        </TextWrapper>
        <Link to={"./blog"} style={{color: "black", textDecoration: "underline"}}>Read More</Link>
    </Wrapper>
)
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;


`

const ImgWrapper = styled.section`
width: 420px;
height: 500px;
`

const TextWrapper = styled.div`
max-width: 420px;
`

export default Container;