import React, { useContext } from "react";
import style1 from "../home/Home.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import About from "../about/About";
import Service from "../service/Service";
import Contact from "../contact/Contact";
import { Namecontext } from "../../App";
import Project from "../project/Project";
import image from "../../asset/mukul.JPG";

const Home = () => {
  const myName = useContext(Namecontext);

  return (
    <>
      <div className={style1.container}>
        <div className={style1.iconsprofile}>
          <div className={style1.socialicon}>
            <a
              href="https://www.linkedin.com/in/mukul-narveriya-989949161/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="" target="_blank">
              <AiOutlineInstagram />
            </a>
            <a href="" target="_blank">
              <BsTwitter />
            </a>
            <a href="" target="_blank">
              <AiFillGithub />
            </a>
          </div>

          <div className={style1.profile}>
            <div className={style1.wraper}>
              <div className={style1.imgbox}>
                <img src={image} alt="image" className={style1.img} />
              </div>
              <div className={style1.usernamediv}>
                <h3 className={style1.userName}>{myName}</h3>
              </div>
              <div className={style1.userdetails}>
                <div className={style1.startword}>I'AM</div>
                <div className={style1.words}> Frontend Devloper</div>
              </div>

              <div className={style1.btngroup}>
                <a
                  href="https://www.linkedin.com/in/mukul-narveriya-989949161/"
                  target="_blank"
                >
                  <button className={style1.btn}>See Cv</button>
                </a>
                <a
                  href="https://www.linkedin.com/in/mukul-narveriya-989949161/"
                  target="_blank"
                >
                  <button className={style1.btn}>Download Cv</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Project />
      <Service />
      <Contact />
    </>
  );
};

export default Home;
