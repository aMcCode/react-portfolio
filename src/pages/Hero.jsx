import React, { useState, useCallback, useEffect } from "react";
import 'bootstrap'
import '../index.css'
import heroBackground from '../assets/portfolio_imgs/grey_white_swirls.jpg'
import { Container, Row, Col } from "react-bootstrap";

const descriptions = [ 'clean', 'efficient', '#3' ]

const Hero = () => {

  const [newDescript, setNewDescript ] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * descriptions.length);
        setNewDescript(descriptions[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 3000);
        return () => clearInterval(intervalID);
    }, [shuffle])

return(
  <Container fluid className="mt-5 mb-5 p-0 text-center jumbotron-image" style={{ backgroundImage:`url(${heroBackground})`, height: 500 }}>
    <Row style={{ height: 120}}></Row>
    <Row>
      <Col sm={4}></Col>
      <Col sm={4}>
          <h1 id="test" className='mb-3'>Alicia McNeil</h1>
          <h4 className='mb-3'>Full Stack Web Developer focused on <i>{newDescript.toUpperCase()}</i> code for exceptional digital experiences.</h4>
          <a className='btn btn-outline-dark btn-lg hero-btn' href='/designthemes' role='button'>See My Work</a>
      </Col>
    </Row>
    <Row style={{ height: 145}}></Row>
    <Row>
      <Col sm={2}>Photo by <a href="https://www.pexels.com/photo/white-painted-wall-1939485/"> Henry & Co.</a>
      </Col>
      </Row>
  </Container>
)
}

export default Hero;


/* gray and white gradient: Photo by Henry & Co.: */

/* modern greay and white Photo by gdtography: https://www.pexels.com/photo/long-exposure-photography-white-dome-building-interior-911758/ */