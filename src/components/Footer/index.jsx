import React from "react";
import "./Footer.css";
import facebook from "../Images/facebook.png"
import twitter from "../Images/twitter.png"
import instagramm from "../Images/instagramm.png"
import linkedin from "../Images/linkedin.png"

export const Footer = () => {
    return(
        <div className="container footer">
            <h1 className="subscribe_title" >Subscribe to Atelier Newsletter</h1>
            <p className="lorem_ipsum" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <div className="buttons">
                <button className="button_date_use" >Data Use Policy.</button><br/>
                <button className="button_subscribe" >“Subscribe”</button>
            </div>
            <p className="lorem_ipsum" >*By clicking button, you agree to our Terms and that you have read our</p>
            <div className="sos_media">
                <img src={facebook} />
                <img src={twitter}/>
                <img src={instagramm}/>
                <img src={linkedin}/>
            </div>
            <div className="footer_nav">
                <p className="lore">Powered by <span style={{color: "rgba(255, 174, 43, 1)"}}> Webflow</span></p>
                <div className="ps">
                    <p>Licenses</p>
                    <p className="like_button"><span>Style Guide</span></p>
                    <p>Instruction</p>
                </div>
            </div>
        </div>
    )
}