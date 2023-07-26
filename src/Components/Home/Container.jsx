import { Link } from "react-router-dom"
import { styled } from "styled-components"

const Container = ({image, alt, title, description, category })=>{
return (
    <Wrapper>
        <ImgWrapper>
        <img src ={image} alt={alt} style={{width: "100%", height: "100%", objectFit: "cover"}}></img>
        </ImgWrapper>
        <TextWrapper className="container-text-wrapper">
            <h4>{category}</h4>
            <h2>{title}</h2>
            <p>{description}</p>

            <Link to={"./blog"} className="link read-more-btn">Read More</Link>
        </TextWrapper>
        
    </Wrapper>
)
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;


@media screen and (max-width: 780px){
    width: 93%;
    flex-direction: row;
    align-items: center;
    gap: 20px
}

`

const ImgWrapper = styled.section`
width: 420px;
height: 500px;

@media screen and (max-width: 780px){
    width: 100%;
    height: 300px;
}

`

const TextWrapper = styled.div`
max-width: 420px;
display: flex;
flex-direction: column;
gap: 5px;
margin-bottom: 10px;
margin-top: 15px;

@media screen and (max-width: 780px){
    width: 100%;
    // height: 300px;
}

`

export default Container;