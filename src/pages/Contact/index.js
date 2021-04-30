import React from "react";
import style from "./Contact.module.scss";

//Components
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";

//Assets
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
    <>
      <Navbar />
      <div className={style.wrapper}>
        <div className={style.contentWrapper}>
          <div className={style.socialContainer}>
            <h4>Contact us via email, phone or come by into our office!</h4>
            <div className={style.iconContainer}>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaFacebookSquare />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <AiOutlineGooglePlus />
              </span>
            </div>
          </div>
          <div className={style.infoContainer}>
            <div className={style.contactWrapper}>
              <span>
                <BsEnvelope className={`${style.icon} ${style.envelope}`} />
                <a href="mailto:info@airhitect.com">info@airhitect.com</a>
              </span>
              <span>
                <FiPhoneCall className={style.icon} />
                +12 34 567 890 <br /> +09 87 654 321
              </span>
              <span>
                <VscHome className={style.icon} />
                1012 Budapest <br />
                Márvány utca 16
              </span>
            </div>
            <div className={style.contactInfo}>
              <h5>We're hiring</h5>
              <p>
                We are looking for new talents to our team! If you think you are
                the right person for AIRhitect send us an email with your CV and
                portfolio. Don’t forget to write a little about yourself!
              </p>
              <a href="mailto:job@airhitect.com">job@airhitect.com</a>
            </div>
          </div>
          <form className={style.container}>
            <Input name="name" type="text" placeholder="Name" />
            <Input name="email" type="email" placeholder="E-mail" />
            <Input name="subject" type="text" placeholder="Subject" />
            <textarea
              className={style.textarea}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </form>
        </div>
        <div>
          <img src={map} />
        </div>
      </div>
    </>
  );
}

export default Contact;
