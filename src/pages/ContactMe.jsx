import React from 'react'
import emailjs from 'emailjs-com'
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import {useState} from 'react';


const ContactMe = () => {

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  const [user_name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    setName('')
    setEmail('')
    setMessage('')
    setShowModal(true)

    emailjs.sendForm(
      'service_r0pnklu',
      'template_857cdm9',
      e.target,
      'kfod81MSoexmxUHLc'
      ).then(res=>(
          console.log(res)
      )).catch(err=> console.log(err))
  }
  return (
    <>
    <Container className="mt-5 mb-5 p-0" style={{ minHeight: "75vh"}}>
      <Row className='mt-5'>
        <Col sm={4}></Col>
        <Col sm={4}><h1 className="pb-3" style={{ borderBottom: "2px solid #e84118"}}>Send a Message<br />to Alicia</h1></Col>
        <Col sm={4}></Col>
      </Row>
      <Row>
      <Col sm={4}></Col>
      <Col sm={4}>
      <form onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            required
            onChange={e => setName(e.target.value)}
            value={user_name}
            />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            className="form-control"
            name="user_email"
            type="email"
            id="email"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">Message</label>
          <textarea
            className="form-control"
            name="message"
            id="message"
            required
            rows={7}
            onChange={e => setMessage(e.target.value)}
            value={msg}
          />
        </div>
        <button className="btn btn-outline-dark btn-lg contact-btn" type="submit">Send Email</button>
      </form>
      </Col>
      <Col sm={4}></Col>
      </Row>
    </Container>

    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for your email! I will reply within 24 hours.</Modal.Body>
        <Modal.Footer>
          <Button variant="Primary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ContactMe