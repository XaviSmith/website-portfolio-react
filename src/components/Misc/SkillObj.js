import React from 'react';

import './skillStyle.css';

function SkillIcon({icon, title, style, iconHeight=100, iconWidth=100, fontSize=18, used=false})
{
    if(iconHeight > window.innerHeight/5 || iconWidth > window.innerWidth/10) { iconHeight = 70; iconWidth = 70; fontSize = 16}
    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginRight: 0, width: 110, marginBottom: 15}}>
            <img src={icon} className= "skill-icon" style={{...style, height: iconHeight, width: iconWidth}} alt="Me"/>
            <p style={{textAlign: 'center', color: used ? "#fffb00" :"inherit", fontWeight: used ? 600: 600,fontSize: fontSize}}>{title}</p>
        </div>
    );
}

export default SkillIcon;