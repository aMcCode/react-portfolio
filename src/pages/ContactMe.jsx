import React from 'react'
import emailjs from 'emailjs-com'

const ContactMe = () => {
  const sendEmail = (e) => {
    e.preventDefault()
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
    <div className="container w-25 mt-5 mb-5">
      <h2 className="mb-3">Send a Message to Alicia</h2>
      <form onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" name="name" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" name="user_email" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" name="message" id="message" required />
        </div>
        <button className="btn btn-outline-dark btn-lg contact-btn" type="submit">Send Email
        </button>
      </form>
    </div>
  )
}
export default ContactMe