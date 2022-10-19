import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

import HabitRabbit from '../assets/portfolio_imgs/HabitRabbit.gif'
import EZstream from '../assets/portfolio_imgs/EZ_Stream.gif'
import techBlog from '../assets/portfolio_imgs/TheTechBlog.gif'
import SocialNetAPI from '../assets/portfolio_imgs/SocialNetAPI.gif'
import WeatherApp from  '../assets/portfolio_imgs/weatherAppMockup.png'
import HandMeUp from  '../assets/portfolio_imgs/hmu-hero.png'

const MyWork = () => {
    return (
        <Container fluid="md">
        <Row className="mt-5">
            <Col></Col>
            <Col><h1 className="pb-3" style={{ borderBottom: "2px solid #e84118"}}>My Work</h1></Col>
            <Col></Col>
        </Row>
        <Row>
            <Col md={4}>
                <Card className="mt-4 shadow-lg p-2" style={{ height: "44rem" }}>
                <Card.Img variant="top" style={{ border: "2px solid #dcdde1", height: "20rem" }} src={HandMeUp} />
                <Card.Body style={{ marginLeft: 20, marginRight: 20 }}>
                <Card.Title className="pt-3 mt-3" style={{ borderTop: "2px solid #e84118", marginLeft: 20, marginRight: 20 }}>Hand Me Up</Card.Title>
                <Card.Text>
                <p style={{ height: "10rem" }} className='card-p'>A MERN Stack e-commerce site where users can donate clothes and purchase products. This project was created in collaboration with other UNC bootcamp students. My focus was on styling and the cart functionality. Featured technologies include React, GraphQL, Node.js, Express.js, MongoDB and Chakra UI. </p>
                <p><a className="site-link" href="https://github.com/aMcCode/hand-me-up_amcn">Github Repo</a></p>
                <p><a className="site-link" href="https://polar-chamber-11415.herokuapp.com/">Live Site</a></p>
                </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mt-4 shadow-lg p-2" style={{ height: "44rem" }}>
                    <Card.Img variant="top" style={{ border: "2px solid #dcdde1", height: "20rem" }} src={WeatherApp} />
                    <Card.Body>
                    <Card.Title className="pt-3 mt-3" style={{ borderTop: "2px solid #e84118", marginLeft: 20, marginRight: 20 }}>Weather Dashboard</Card.Title>
                    <Card.Text>
                    <p style={{ height: "10rem" }} className='card-p'>This app allows a user to retrieve the current forcast and 5-day forcast for any city in the world. The app saves the previous 3 searches the user has made, adding the most recent search to the top of the list. Featured technology include API consumption and JQuery</p>
                    <p><a className="site-link" href="https://github.com/aMcCode/">Github Repo</a></p>
                    <p><a className="site-link" href="https://amccode.github.io/weather-dashboard/">Live Site</a></p>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mt-4 shadow-lg p-2" style={{ height: "44rem" }}>
                    <Card.Img variant="top" style={{ height: "20rem" }}src={EZstream} />
                    <Card.Body>
                    <Card.Title className="pt-3 mt-3" style={{ borderTop: "2px solid #e84118", marginLeft: 20, marginRight: 20 }}>EZ-Stream</Card.Title>
                    <Card.Text>
                    <p style={{ height: "10rem" }} className='card-p'>A web application that allows a user to search for movie and show titles and displays the platforms on which that title is available. This project was created in collaboration with other UNC bootcamp students. My focus was styling and local storage management. Featured technology includes Foundation, jQuery and API consumption.</p>
                    <p><a className="site-link" href="https://github.com/aMcCode/group-2-project-one">Github Repo</a></p>
                    <p><a className="site-link" href="https://amccode.github.io/group-2-project-one/">Live Site</a></p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>
          <Row className="mb-5">
            <Col md={4}>
                <Card className="mt-5 shadow-lg p-2" style={{ height: "44rem" }}>
                    <Card.Img style={{ border: "2px solid #dcdde1", height: "20rem" }} variant="top" src={techBlog} />
                    <Card.Body>
                    <Card.Title className="pt-3 mt-3" style={{ borderTop: "2px solid #e84118", marginLeft: 20, marginRight: 20 }}>The Tech Blog</Card.Title>
                    <Card.Text>
                    <p style={{ height: "10rem" }} className='card-p'>A CMS-style blog site similar to a Wordpress site. Developers can post blog messages and other developers can comment on those posts. The app follows the MVC paradigm and uses Handlebars.js and Sequelize.</p>
                    <p><a className="site-link" href="https://github.com/aMcCode/">Github Repo</a></p>
                    <p><a className="site-link" href="https://code-tech-blog.herokuapp.com/">Live Site</a></p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mt-5 shadow-lg p-2" style={{ height: "44rem" }}>
                <Card.Img style={{ height: "20rem" }} variant="top" src={SocialNetAPI} />
                <Card.Body>
                <Card.Title className="pt-3 mt-3" style={{ borderTop: "2px solid #e84118", marginLeft: 20, marginRight: 20 }}>Social Network API</Card.Title>
                <Card.Text>
                    <p style={{ height: "10rem" }} className='card-p'>This app represents the back-end implementation of a social media app. The app uses Express.js and MongoDB.</p>
                    <p><a className="site-link" href="https://github.com/aMcCode/">Github Repo</a></p>
                    <p><a className="site-link" href="https://drive.google.com/file/d/1VpiDovxGsXg9ykJ-MZc-SJiG2TuBaHva/view">API Demo 1</a></p>
                    <p><a className="site-link" href="https://drive.google.com/file/d/1-VO0olW4E3b7KjrefiP-BmMLrv6gP5tG/view">API Demo 2</a></p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mt-5 shadow-lg p-2" style={{ height: "44rem" }}>
                <Card.Img style={{ border: "2px solid #dcdde1", height: "20rem" }} variant="top" src={HabitRabbit} />
                <Card.Body>
                <Card.Title className="pt-3 mt-3" style={{ borderTop: "2px solid #e84118", marginLeft: 20, marginRight: 20 }}>Habit Rabbit</Card.Title>
                <Card.Text>
                    <p style={{ height: "10rem" }} className='card-p'>A full stack web application that allows users to create an account, login, create new habits, and track daily progress. This project was created in collaboration with other UNC bootcamp students. My focus was data model and api-route creation. Featured technologies include Skeleton CSS, MySQL, Handlebars.js, Express.js and Bcrypt</p>
                    <p><a className="site-link" href="https://github.com/aMcCode/habit-rabbit_project2_amccode">Github Repo</a></p>
                    <p><a className="site-link" href="https://habit--rabbit.herokuapp.com/">Live Site</a></p>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
      );
}

export default MyWork