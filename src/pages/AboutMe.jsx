import React from "react";
import 'bootstrap'
import '../index.css'
import headShot from '../assets/portfolio_imgs/headshot.jpg'
import { Container, Row, Col, Image } from "react-bootstrap";

const AboutMe = () => {
return(
    <Container className="mt-5 mb-5 p-0">
        <Row>
        <Col sm={7}>
            <h1 className='mb-3'>About<br/>Alicia McNeil</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec sagittis aliquam malesuada. Integer quis auctor elit sed vulputate mi sit. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Nibh tellus molestie nunc non blandit massa enim. Lorem donec massa sapien faucibus et molestie ac. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Nunc sed velit dignissim sodales. Mauris a diam maecenas sed. At urna condimentum mattis pellentesque id nibh tortor. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque.</p>

            <p>Lectus quam id leo in vitae turpis. Ac placerat vestibulum lectus mauris ultrices eros in. Gravida neque convallis a cras semper auctor neque vitae. Sit amet luctus venenatis lectus magna fringilla urna. Id semper risus in hendrerit. Bibendum arcu vitae elementum curabitur vitae nunc. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Orci a scelerisque purus semper eget duis at. Libero id faucibus nisl tincidunt eget nullam non nisi est.</p>

            <p>Nibh ipsum consequat nisl vel pretium lectus quam. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Proin sed libero enim sed faucibus turpis in eu mi. Amet commodo nulla facilisi nullam vehicula ipsum. Eu mi bibendum neque egestas congue quisque egestas. Tristique risus nec feugiat in fermentum posuere urna. Dolor morbi non arcu risus quis varius quam quisque id. Amet facilisis magna etiam tempor orci eu. Potenti nullam ac tortor vitae purus. Amet facilisis magna etiam tempor orci eu lobortis elementum. Faucibus scelerisque eleifend donec pretium vulputate.</p>
        </Col>
        <Col sm={3} className="p-5">
            <Image align="center" rounded src={headShot} width={200} height={200} />
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