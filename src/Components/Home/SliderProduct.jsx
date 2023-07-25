import { styled } from "styled-components"
import { Link } from "react-router-dom"
const SliderProduct =({image1, name, price, id})=> {
    return (
        <Link to={"./shop/"+ id} style={{textDecoration: "none", color: "black"}}>
<Wrapper>
    <IMG src={image1}/>
    <h3>{name}</h3>
    <h4>£{price}</h4>
    
</Wrapper>
        </Link>

    )
}

const Wrapper = styled.div`
width: 400px;
height: 300px;
margin-bottom: 100px;
text-align: center


`
const IMG = styled.img`
object-fit: cover;
width: 100%;
height: 100%;

`

export default SliderProduct