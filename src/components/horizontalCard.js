import React from "react";
import './cardStyle.css';

function HorizontalCard({data})
{
    return(
        <div className="cardContainer">
            <div className="card">
            <a href={data.iconLink}><img className="card-img" src={data.image} alt={data.title}/></a>
                <div className="card-right">
                    <span className="title" style={data.titleColor ? {'color': data.titleColor} : {}}>{data.title}</span>
                    <span className="roles">{data.roles}</span>
                    <p className="body-text">{data.body}</p>
                </div>
            </div>
        </div>
    );
}

export default HorizontalCard;