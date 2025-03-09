import React, { useState,useContext } from "react";
import "./sidebar.css";
import { assets } from "../../assets/file";
import {Context} from '../../context/context';

export default function Sidebar() {

    const [extended, setExtended] =useState(false)
    const{onSent,newChat,prevPrompts}=useContext(Context);


    const toggleExtended = () => {
        setExtended(!extended)
    }

  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" onClick={toggleExtended} src={assets.menu_icon} alt="" />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
         {extended? <p>New Chat</p>:null}
        </div>
        {extended?
        <div className="recent">
          <p className="recent-title">Recent</p>
          {prevPrompts.map((prompt,index)=>(
            <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>{prompt}..</p>
          </div>
          ))}
        </div>
        :null}
      </div>
      
      <div className="bootom">
        <div className="bootom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended? <p>Help</p>:null}
        </div>
        <div className="bootom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended? <p>Activity</p>:null}
        </div>
        <div className="bootom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended? <p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
}
