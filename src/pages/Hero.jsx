import React, { useState, useCallback, useEffect } from "react";
import 'bootstrap'
import '../index.css'
import heroBackground from '../assets/portfolio_imgs/grey_white_swirls.jpg'
import headShot from '../assets/portfolio_imgs/headShot_bw.jpg'
import { Image, Container, Row, Col } from "react-bootstrap";

const descriptions = [ 'Web developer', 'Python developer', 'C# developer', 'Designer', 'Trainer', 'Mentor' ]

const Hero = () => {

  const [newDescript, setNewDescript ] = useState("Web developer");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * descriptions.length);
        setNewDescript(descriptions[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 3000);
        return () => clearInterval(intervalID);
    }, [shuffle])

return(
  <Container fluid className="mt-5 mb-5 p-0 text-center jumbotron-image" style={{ backgroundImage:`url(${heroBackground})`, minheight: 500 }}>
    <Row style={{ height: 120}}></Row>
    <Row>
    <Col sm={2}></Col>
    <Col sm={3}>
      <Image align="center" rounded src={headShot} width={300} height={300} />
    </Col>
    <Col sm={4} className="p-5">
          <h1 id="test" className='mb-3'>Alicia McNeil</h1>
          <h4 className='mb-3'><span className="heroDescriptions">{newDescript}</span> focused on clean, efficient coding for exceptional digital experiences.</h4>
          <a className='btn btn-outline-dark btn-lg hero-btn' href='/myWork' role='button'>See My Work</a>
    </Col>
    </Row>
    <Row style={{ height: 145}}></Row>
    <Row>
      <Col sm={2}>Background image by <a className="heroPhotoCreditLink" href="https://www.pexels.com/photo/white-painted-wall-1939485/"> Henry & Co.</a>
      </Col>
      </Row>
  </Container>
)
}

export default Hero;


/* gray and white gradient: Photo by Henry & Co.: */

/* modern greay and white Photo by gdtography: https://www.pexels.com/photo/long-exposure-photography-white-dome-building-interior-911758/ */