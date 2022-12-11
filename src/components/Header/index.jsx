import React from "react";
import "./Header.css"

export const Header = () => {
    return (
        <div className="container header">
            <div className="block_menu">
                <ul>
                    <span className="title_atelier" >Atelier.</span>
                    <li>OVERVIEV</li>
                    <li>PAGES</li>
                    <li>PORTFOLIO</li>
                    <li>TEMPLATE</li>
                    <li>CONTACT</li>
                </ul>
                <button className="button_template">Buy Template</button>
            </div>
        </div>
    )
}