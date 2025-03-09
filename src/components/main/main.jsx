import './main.css'
import { assets } from "../../assets/file";
import {Context} from '../../context/context'
import { useContext } from "react";

export default function main() {

     const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          {!showResult?<>
            <div className="greet">
                <p><span>Hello,Developer,</span></p>
                <p>How I can help you today</p>
            </div>
            <div className="cards">
            <div className="card">
                <p>Can Ai replace Engineer.</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>How Ai can help in my journy.</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Differance Between Ai and Human Engineer.</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>How I can increase my productivity using Ai.</p>
                <img src={assets.code_icon} alt ="" />
            </div>
            </div>
          </>:<div className="reasult">
            <div className="reasult-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading?<div className='loder'>
                    <hr />
                    <hr />
                    <hr />
                </div>:
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
            </div>
            </div>}

            <div className="main-bottom">
                <div className="search-box"> 
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Ask your problem' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>
        </div>
    </div>
  )
}