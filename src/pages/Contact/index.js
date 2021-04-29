import React from "react";
import Navbar from "../../components/Navbar";
import map from "../../assets/map.png";

//Contact icons
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";

//Social icons
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";

function Contact(props) {
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <h4>Contact us via email, phone or come by into our office!</h4>
          <div>
            <FaLinkedin />
            <FaFacebookSquare />
            <FaInstagram />
            <AiOutlineGooglePlus />
          </div>
        </div>
        <div>
          <div>
            <span>
              <BsEnvelope />
              info@airhitect.com
            </span>
            <span>
              <FiPhoneCall />
              +12 34 567 890 <br /> +09 87 654 321
            </span>
            <span>
              <VscHome />
              1012 Budapest <br />
              Márvány utca 16
            </span>
          </div>
          <div>
            <h5>We're hiring</h5>
            <p>
              We are looking for new talents to our team! If you think you are
              the right person for AIRhitect send us an email with your CV and
              portfolio. Don’t forget to write a little about yourself!
              job@airhitect.com
            </p>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div>
        <img src={map} />
      </div>
    </div>
  );
}

export default Contact;
