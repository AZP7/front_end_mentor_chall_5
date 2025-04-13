import React, { act, useState } from 'react'
import './extension.css'
export default function Extension({title, description, imageURL, sentBoolean, sentRemove,acting,Color}) {

    const RemoveExten = ()=>{
        sentRemove()
    }


    const handelClick = ()=>{
        sentBoolean()
    }

      return (
        <div className={`container ${Color? 'Changewhite': ""}`}>
            <div className="img_label">
                <div className="img">
                    <img src={imageURL} alt="" />
                </div>
                <div className="label">
                    <span>{title}</span>
                    <p className={Color ? "trunDark":""}>{description}</p>
                </div>
            </div>
            <div className="remove_active">
                <button className={`remove ${Color ? "Changewhite" : ""}`} onClick={RemoveExten}>Remove</button>

                <div className={`toggle_switch ${acting ? "changeColor" : ""}`} onClick={()=>handelClick()}>
                    <div className={`toggle ${acting ? 'active' : ""}`} ></div>
                </div>
            </div>
        </div>
  )
}
