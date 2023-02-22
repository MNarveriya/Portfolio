import React from "react";
import style2 from "../about/About.module.css";
import image from "../../asset/mukul.JPG";

const About = () => {
  return (
    <>
      <div className={style2.container}>
        <div className={style2.smallcontainer}>
          <div className={style2.heading}>
            <h2>About Us</h2>
          </div>
          <div className={style2.userdata}>
            <div className={style2.img}>
              <img src={image} alt="image" />
              <div className={style2.blankcontent}></div>
            </div>
            <div className={style2.userdetails}>
              <h3 className={style2.header}>Mukul Singh Narveriya</h3>
              <p>
                i am Mukul Narveriya and i have passed a b.tech from SIRTE
                college bhopal and i have also passed 10th and 12th from subhash
                niketan higher secondery school Ganj Basoda. i am very
                authenticate person. i am a fresher. i have learning new
                tchnology and enhance to my skills in frontend devlopment.
                overrall i doing enhance our skills. i am able to any problem. i
                am always energrtic and eager to new skills
              </p>
              <div className={style2.buttonGroups}>
                <a
                  href="https://www.linkedin.com/in/mukul-narveriya-989949161/"
                  target="_blank"
                >
                  <button className={style2.aboutbutton}>see cv</button>
                </a>
                <a
                  href="https://www.linkedin.com/in/mukul-narveriya-989949161/"
                  target="_blank"
                >
                  <button className={style2.aboutbutton}>download cv</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
