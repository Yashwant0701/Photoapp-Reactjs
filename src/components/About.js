import {Container,Row,Col} from "react-bootstrap";
import Brandlogo from '../assets/logo.png'
const About=()=>{
    return(
<Container>
<h1 style={{textAlign:"center"}}>About Us</h1> <br></br>

<Row>
    <Col md={5}>
        <img src={Brandlogo} style={{height:'300px'}} alt="logo"/>
    </Col>
    <Col>
    <p style={{lineHeight:"2",backgroundColor:"#eee",borderRadius:"15px"}}><b>Photo Gallery App </b> is collection of photos and information related to the photos. Photo Gallery provides management and searching capabilities for digital photos. It is a Webpage which contain large numbers of media content almost always containing images—with little  supporting text. It Almost always has an image or image thumbnail.Clicking any image will normally take the reader to its image page.This is a page that consists entirely or almost entirely of one or more galleries.Grouping a number of images together may reveal something of value to the reader, even if that value cannot be put into words ,common themes may unexpectedly appear</p>
    </Col>
</Row>


</Container>

    )

}
export default About