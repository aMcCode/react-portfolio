import React from "react";
import 'bootstrap'
import '../index.css'
import headShot from '../assets/portfolio_imgs/headshot_pinkGrey.jpg'
import { Container, Row, Col, Image } from "react-bootstrap";

const AboutMe = () => {
return(
    <Container className="mt-5 mb-5 pt-5">
        <Row className="mt-5">
            <Col sm={2}></Col>
            <Col sm={3}><h1 className="pb-3" style={{ borderBottom: "2px solid #e84118"}}>About<br/>Alicia McNeil</h1></Col>
            <Col></Col>
        </Row>
        <Row className="justify-content-left">
        <Col className="pt-3" sm={7}>
            <p className="align-left">I am an experienced clinical data and systems programmer. Over the past 10 years I have become highly proficient as a .NET/C# and Python programmer. In my programming roles within the clinical trial industry, I have created applications to support data analytics reporting, database builds and system integrations via webservice APIs. Recently, I've become intersted in web development, both front-end and back-end. I'm quite facinated with it, actually! I love the creativity and collaboration involved in bringing a web-site to life.</p>

            <p className="align-left">I've resolved to learn as much as I can about web development. I recently completed a full-stack web development bootcamp offered through UNC-Chapel Hill. I now have experience with Javascript, JQuery, React, GraphQL, SQL, MySQL, MongoDB, Node.js, Express.js, Bootstrap and MVC using Handlebars.js. </p>

            <p className="align-left">I'm looking for opportunities, including volunteer opportunities, to become more active in the web development space.</p>
        </Col>
        <Col sm={5}>
            <Image align="center" rounded src={headShot} width={300} height={300} />
        </Col>
        </Row>
        {/* <Row>
            <Col sm={3}><Image align="center" rounded src={headShot} width={175} height={175} /></Col>
            <Col sm={3}><Image align="center" rounded src={headShot} width={175} height={175} /></Col>
            <Col sm={3}><Image align="center" rounded src={headShot} width={175} height={175} /></Col>
            <Col sm={3}><Image align="center" rounded src={headShot} width={175} height={175} /></Col>
        </Row> */}
    </Container>
)
}

export default AboutMe;