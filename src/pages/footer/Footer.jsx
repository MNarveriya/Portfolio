import React from "react";
import footer from "../footer/Footer.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className={footer.container}>
        <div className={footer.details}>
        <p>designed and devloped by</p>
          <div className={footer.socialicon}>
            <a
              href="https://www.linkedin.com/in/mukul-narveriya-989949161/"
              target="_blank"
              style={{ color: "#fff" }}
            >
              <FaLinkedinIn />
            </a>
            <a href="" target="_blank" style={{ color: "#fff" }}>
              <AiOutlineInstagram />
            </a>
            <a href="" target="_blank" style={{ color: "#fff" }}>
              <BsTwitter />
            </a>
            <a href="" target="_blank" style={{ color: "#fff" }}>
              <AiFillGithub />
            </a>
          </div>
          
          <span>@copyright 2023</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
