import React from 'react';

import './skillStyle.css';

function SkillIcon({icon, title, style, fontSize=18, used=false, mini=false, iconHeight= mini ? 40: 100, iconWidth= mini ? 40 : 100,})
{
    if(!mini && ( iconHeight > window.innerHeight/5 || iconWidth > window.innerWidth/10 )) { iconHeight = 70; iconWidth = 70; fontSize = 16}


    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginRight: 0, width: mini ? iconWidth :110, marginBottom: mini ? 0 : 15}}>
            <img src={icon} className= "skill-icon" style={{...style, height: iconHeight, width: iconWidth}} alt="Me"/>
            {!mini &&
                <p style={{textAlign: 'center', color: used ? "#fffb00" :"inherit", fontWeight: used ? 600: 600,fontSize: fontSize}}>{title}</p>
            }
            
        </div>
    );
}

export default SkillIcon;