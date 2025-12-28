import "../styles/Contact.css"
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-dark text-white py-5">
      <div className="container text-center">
        <h2 className="mb-4">Contact</h2>

        <p><FaEnvelope />📧 kirubakaran.d2001@gmail.com</p>
        <p><FaLinkedin />💼 linkedin.com/in/kirubakaran021</p>
        <p><FaPhone />📱 +91 8838942554</p>
        <p className="btm"><FaMapMarkerAlt />📍 Chennai, Tamil Nadu, India</p>
      </div>
    </section>
  );
}
