import React from "react";
import "./Cards.css"

export const Cards = ({data}) => {

    return(
            <div className="second_card" >
                <span className="cards">
                    <img className="cards_foto" src={data.img} />
                    <p className="card_title" >{data.title}</p>
                </span>
            </div>
    )
}