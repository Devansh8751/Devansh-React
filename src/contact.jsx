import "./App.css";

function Contact() {
  return (
    <div>
      <div className="contact">
        <h2>Get in Touch</h2>
        <p>Feel free to drop a message for collaboration or any queries.</p>
        <form className="form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
