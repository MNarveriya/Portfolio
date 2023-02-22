import React from 'react'
import service from "../service/Service.module.css";
import { Listdata } from "./servicelist";

const Card = () => {
  return (
    <>
       {Listdata.map((e, index) => {
             return (
                 <div className={service.card} key={index}>
                   <div className={service.imgGroup}>
                     <img src={e.img} alt="image" />
                   </div>
                   <h4 className={service.title}>{e.title}</h4>
                   <p className={service.carddetails}>{e.carddetails}</p>
                   <div className={service.btngroup}>{e.button}</div>
                 </div>
               );
             })}
    </>
  )
}

export default Card
