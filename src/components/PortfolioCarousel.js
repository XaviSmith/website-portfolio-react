import React, {useState} from "react";
import unityIcon from 'images/UnityIcon.png';
import lkIcon from "images/LKIcon2.png";
import cityHallIcon from "images/CityHallIcon.png";
import reactLogo from "images/ReactLogo.webp";
import caresenseLogo from "images/CaresenseLogo.png"
import profilePic from 'images/LinkedIn3.png'
import '../App.css'; //NOTE: Include our css AFTER bootstrap to override it!

import HorizontalCard from "./horizontalCard";

const featuredPortfolioList = [
    {
        title: "CareSense | MedTrak, Inc (2017-2023)",
        roles: "Project Lead, Senior Full Stack Developer, Testing Lead",
        body: "CareSense is a client facing medical app that helps doctors, practices, and hospitals connect with patients guide patients to better health. The system uses customized care pathways with tailored reminders, educational content, videos, surveys and more to ensure that patients are given the best possible care outside of the hospital.\n\n"
            + "I served as both Project Lead for the App and a Senior Full Stack Developer for related areas of our system like the Patient Portal",
        image: caresenseLogo,
        iconLink: "https://www.caresense.com/",
        programs: ["Unity"],
        languages: ["C#"],
        platform: ["PC (Steam)"],
        genre: ["Platformer", "Casual", "Speedrun"]
    },
    {
        title: "Lightning Katana | Juicy Pulp Games (2024)",
        titleColor: "#ffbf11",
        roles: "Project Lead, Lead Developer, Production, Marketing",
        image: lkIcon,
        iconLink: "https://store.steampowered.com/app/3162850/Lightning_Katana/",
        body: "A fast-paced 3D Action FPS inspired by Hotline Miami, Devil May Cry and Doom with Slick movement, precise parries, and electrifying abilities.\n\n" +
        "I oversaw the game design, art, and production from start to finish, created a highly customizable engine for making and configuring enemy AI/Attacks/Abilities, level creation, and simple triggers/event scripting for non-programmers, and integrated backend features for leaderboards, authentication, and live deployment.",
        programs: ["Unity"],
        languages: ["C#"],
        platform: ["PC (Steam)"],
        genre: ["FPS", "Action", "Boomer-Shooter"]
    },
    {
        title: "City Hall | Skyless Game Studios",
        roles: "Mechanics Programmer",
        body: "City Hall is a realistic SimCity-esque game for mobile where players must manage the cities they live in using data pulled from real operating budgets.\n\n"
        + "I worked on the foundational code for the grid system and placing buildings!",
        image: cityHallIcon,
        iconLink: "https://skylessgames.com/games/city-hall/",
        programs: ["Unity"],
        languages: ["C#"],
        platform: ["PC (Steam)"],
        genre: ["Sandbox", "City-builder", "Construction"]
    }
];

const otherPortfolioList = [
    {
        title: "Life Leap | Skyless Game Studios (2015)",
        roles: "Mechanics Programmer, Level Design",
        body: "LifeLeap is an infinite runner with a twist for mobile where the player ages while their health constantly decreases. All in-game purchases go directly towards buying healthcare supplies and procedures to youths in developing countries."
        +"\n\nI worked on the procedural level generation and came up with the in-game purchase/currency system + Unity Ads implementation!",
        image: unityIcon,
        iconLink: "https://skylessgames.com/games/lifeleap/",
        programs: ["Unity"],
        languages: ["C#"],
        platform: ["PC (Steam)"],
        genre: ["Platformer", "Casual", "Speedrun"]
    }
];
function PortfolioCarousel()
{

    const [activeIndex, setActiveIndex] = useState(0);

    function arrow(_prevArrowOnClick, _nextArrowOnClick){
        return(
            <div>
                <span className="prev-Arrow" onClick={_prevArrowOnClick}>&#10094;</span>
                <span className="next-Arrow" onClick={_nextArrowOnClick}>&#10095;</span>
            </div>
        );
    }

    function dots(_onClick)
    {
        return(
            <div className="all-dots">
            {featuredPortfolioList.map((slide, index) => (
                <span key={index} className={activeIndex === index ? "dot active-dot" : "dot"} onClick={() => _onClick(index)}></span>

            ))}
        </div>
        );
        
    }

    function clickDot(_index)
    {
        setActiveIndex(_index);
        console.log("ACTIVE INDEX: " + _index)
    }

    function sliderContent()
    {
        return(
            <section>
                {featuredPortfolioList.map((slide, index) => (
                    <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
                        <HorizontalCard data={slide}/>
                    </div>
                ))}
            </section>
        )
    }

    return(
        <div className="carousel-container">
            {sliderContent()}
            {arrow( ()=>{activeIndex === 0 ? setActiveIndex(featuredPortfolioList.length - 1) : setActiveIndex(activeIndex - 1) }, 
                    ()=>{activeIndex === featuredPortfolioList.length - 1 ? setActiveIndex(0) : setActiveIndex(activeIndex + 1)})}
            {dots(clickDot)}
        </div>
    )
}

export default PortfolioCarousel;