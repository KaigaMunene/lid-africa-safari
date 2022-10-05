import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
// import { pic } from "../../Assets/Images/test-img.jpg";
import "../../Sass/pages/contact-page/contact-us.scss";

const contactUs = () => {
  return (
    <section>
      <div className="container">
        <div className="contact-info">
          <h2>Get in touch with us</h2>
          <ul className="info">
            <li>
              <span>
                <GoLocation />
              </span>
              <span>
                {" "}
                2912 meaan Road
                <br />
                Las Vegas, CA
                <br />
                80001
              </span>
            </li>
            <li>
              <span>
                <AiOutlineMail />
                <span>lidafricasafaris@gmail.com</span>
              </span>
            </li>
            <li>
              <span>
                <IoCallOutline />
                <span>+254 712930939</span>
              </span>
            </li>
          </ul>
          <ul className="socials">
            <li>
              <a href="#fb">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="#tweet">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="#insta">
                <FaInstagramSquare />
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <h2> Send us a message</h2>
          <div className="form-box">
            <div className="input-box w50">
              <input type="text" name="full name" required />
              <span>Full Name</span>
            </div>
            <div className="input-box w50">
              <input type="text" name="phone number" required />
              <span>Phone Number</span>
            </div>
            <div className="input-box w50">
              <input type="email" name="email" required />
              <span>Email</span>
            </div>
            <div className="input-box w100">
              <textarea name="message" required />
              <span>Write your message here...</span>
            </div>
            <div className="input-box w100">
              <input type="submit" value="send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactUs;
