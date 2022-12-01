import React from "react";
import { useEffect, useState } from "react";
import { Container,Spinner } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
const Photo = () => {
    const {id}=useParams()
    const [singlePhoto, setSinglePhoto] = useState({})

    useEffect(() => {
        axios
            .get(`https://picsum.photos/id/${id}/info`)
            .then((res) => setSinglePhoto(res.data))
            .catch((err) => console.log(err))
    }, [id])

    return (
        <>
      {Object.keys(singlePhoto).length?(   
        <Container>
            <img src={singlePhoto.download_url}
                style={{ width: "100%", height: "90vh", margin: "10px", boxShadow: " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px", padding: "8px", borderRadius: "5px" }} alt="enlarged-image" />
        </Container>
    ):(<Spinner animation="border" role="status" style={{margin:"200px auto",display:"block"}}>
    <span className="visually-hidden">Loading...</span>
  </Spinner>)
}
</>
    )
}
export default Photo