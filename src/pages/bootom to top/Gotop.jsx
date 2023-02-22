import React, { useEffect, useState } from 'react'
import gotop from "../bootom to top/Gotop.module.css"
import { FaArrowUp } from "react-icons/fa"

const Gotop = () => {
    const [visible , isVisible] =  useState(false)
   
    const gotoTop = () =>{
        window.scrollTo({top: 0,
             behavior:"smooth"})
    }

    const listentoscroll = () =>{
        let heighttoHidden = 150;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heighttoHidden) {
            isVisible(true);
        }else{
          isVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll",listentoscroll);
        return () => window.removeEventListener("scroll", listentoscroll);
    } , [])

  return (
    <section>
    {visible && ( 
      <div className={gotop.topBtn} onClick={gotoTop}>
        <FaArrowUp className={gotop.topBtnicon} />
    </div>
    )}
    </section>
  )
}

export default Gotop
