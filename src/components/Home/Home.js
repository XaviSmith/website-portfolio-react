import Button from 'react-bootstrap/Button'
import githubLogo from 'images/GithubLogo.png'
import profilePic from 'images/LinkedIn3.png'
import SkillIcon from 'components/Misc/SkillObj';

//GAME DEV ICONS
import cSharpIcon from 'images/CSharpLogo.png';
import cplusIcon from 'images/C++Logo.png';
import unityIcon from 'images/UnityIcon.png';
import unrealIcon from 'images/UnrealIcon.png';
import blenderIcon from 'images/BlenderIcon.webp';
import steamIcon from 'images/Steam_icon_logo.png';
import facepunchIcon from 'images/FacepunchIcon.jpg';
import asepriteIcon from 'images/AsepriteIcon.png';

//FRONTEND ICONS
import reactIcon from 'images/ReactLogo.webp';
import jsIcon from 'images/JavascriptIcon.webp';
import tsIcon from 'images/TypescriptIcon.png';
import htmlIcon from "images/HTMLIcon.png";
import cssIcon from 'images/CssIcon.png';

//BACKEND ICONS
import phpIcon from 'images/php.svg';
import sqlIcon from 'images/SqlIcon.png';
import awsIcon from 'images/AWSIcons.png';
import pythonIcon from 'images/Python.webp';
import bitbucketIcon from 'images/BitbucketLogo.webp';

//MOBILE ICONS
import xcodeIcon from 'images/Xcode.svg';
import androidStudioIcon from 'images/AndroidStudioIcon.png';
import firebaseIcon from "images/FirebaseLogo.webp";
import gradleIcon from  'images/gradleIcon.svg';

//OTHER ICONS
import javaIcon from 'images/Java-Icon.png';
import reaperIcon from 'images/reaper-logo.png';

//Resume
import resumeDoc from 'files/Xavier_Smith_SeniorSoftwareEngineerResume.pdf';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../App.css'; //NOTE: Include our css AFTER bootstrap to override it!
import React, {useState, useEffect, useRef} from 'react';
import PortfolioCarousel from 'components/PortfolioCarousel';


function Home()
{
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight});

    //CAROUSEL

    function handleResize(){
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
        
    }

    /* Handle window resizing */
    useEffect (() => {
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    /* auto size picture on desktop */
    const [welcomePicHeight, setWelcomePicHeight] = useState(0)
    const welcomeBox = useRef(null)

    useEffect(() => {
        setWelcomePicHeight(welcomeBox.current.clientHeight)
    },[welcomeBox.current?.clientHeight])

    const skillsRef = useRef(null);
    const portfolioRef = useRef(null);

    const scrollToSection = (_ref) => {
        _ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <div className="Home-container" style={{color: 'white'}}>
            <header className="Home-header">
                {/* Divide into 2 
                <div style={{display: 'flex', flexDirection: windowSize.width > 1200 ? 'row' : 'column', width: '100vw', border: 'solid', borderColor: 'blue'}}>

                    //left half
                    <div style={{display: 'flex', flexDirection: windowSize.width > 1200 ? 'row' : 'column', border: 'solid', borderColor: 'green'}}> 
                    </div>

                    //right half
                    <div style={{width: windowSize.width > 1200 ? windowSize.width /2 : windowSize.width, border: 'solid'}}>
                    </div>
                </div>
                */}
                
                    <div style={{display: 'flex', flexDirection: windowSize.width > 1200 ? 'row' : 'column' /*border: 'solid', borderColor: 'green'*/}}>

                        {/* ****************************Welcome banner*******************************/}

                        <div className='welcome-container'>
                            {/*
                            <div>
                                <img src={profilePic} style={{width: 200, borderRadius: "50%"}} alt="Me"/>
                            </div>
                            */}

                            {/*****************************left text*************************************/}
                            <div className="welcome-box" style={{flex: 1}} ref={welcomeBox}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    

                                    <p className="Home-intro">Welcome</p>
                                    <p >I'm <span className="Home-name-text">Xavier Smith</span></p>

                                        {windowSize.width < 820 && //********************Image inside the main box on mobile.**********************
                                            <div style={{display:'flex', justifyContent: 'center'}}>
                                                <img src={profilePic} className='welcome-pic' alt="Profile Pic"></img>
                                            </div>
                                            
                                        }

                                    <p style={{fontSize: windowSize.width < 700 ? 15 : 20, fontWeight: 600, width: windowSize.width < 500 ? "100%" : "100%" , marginTop: -10, paddingLeft: /*8*/ 0,
                                        lineHeight: windowSize.width < 700 ? 2 : 1.5
                                    }}>
                                        A <span ><i>Senior Fullstack Engineer</i></span> that specializes in<br/>
                                        <span > App Development</span>,
                                        <span > UI/UX</span>, and 
                                        <span> Video Game Development</span>
                                    </p>

                                    
                                    <div className='welcome-box-button-container'>

                                        <Button variant="light" className='welcome-box-buttons' onClick={()=> window.open('https://github.com/XaviSmith', '_blank')}>
                                            <img src={githubLogo} style={{marginLeft: -10, height: 50}} alt="GitHub" />
                                            <span style={{flex: 1, fontWeight: 'bold', fontSize: 20}}>GitHub</span>
                                        </Button>

                                        <Button className='welcome-box-buttons' style={{ backgroundColor: "#1a88d6"}}
                                            onClick={()=>window.open('https://www.linkedin.com/in/xavismith/', '_blank')}>
                                            <span style={{flex: 1, fontWeight: 'bold', fontSize: 20}}>LinkedIn</span>
                                        </Button>
                                        
                                    </div>
                                    
                                </div>                             
                            
                            </div>

                            {windowSize.width > 820 && //Image to the right on desktop
                                <div className="welcome-pic-container" style={{height: welcomePicHeight*1.4, width: welcomePicHeight * 1.8, maxHeight: "45vh", maxWidth: "40vw", minHeight: welcomePicHeight, marginLeft:'auto'}}>
                                    <img src={profilePic} className='welcome-pic' alt="Profile Pic"></img>
                                </div>
                                    
                            } 
                            
                        </div>
                        
                        
                        

                            
                    </div>

                    {/***********************Buttons************************************/}

            <div className="welcome-buttons">
                <Button className='home-button' onClick={() => scrollToSection(skillsRef)}> 
                    SKILLS
                </Button>

                <Button className='home-button' onClick={() => scrollToSection(portfolioRef)}> 
                    PORTFOLIO
                </Button>

                <a href={resumeDoc} download="Xavier Smith Resume" target='blank'>
                    <Button className='home-button'> 
                        RESUME
                    </Button>
                </a>
                

            </div>

            </header>

            


            {/* *******************Skills icons section?*******************************/}
                                
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'center', width: "100%", height: "100%", alignItems: 'center', backgroundColor:  "rgba(0, 0, 0, .7)",
                /*borderTop: 'solid', borderColor: "#111",*/ marginTop: 50, marginBottom: 40}} ref={skillsRef}>                        
    
                    <p className="section-title">Skills</p>
                    <div style={{display:'flex', flexDirection:'row'}}>
                    <div style={{backgroundColor:"#fffb00", height:10, width: 10,borderRadius: 2,  marginTop: -52, marginRight: 5 ,marginBottom: 30, fontWeight: 'bold', fontSize: 30}}></div>
                    <span style={{fontSize: 15, fontStyle: 'italic', marginTop: -60, marginBottom: 30}}> - used to build this website</span>
                    </div>
                    
                    <div className='skills-container'>

                        {/**************** Game Development *********************/}
                        <div className='skill-category'>

                            <p style={{textAlign: 'center', fontSize: 38, fontWeight: 'bold'}}>Game Development</p>

                            <div className='skill-icon-container'>
                                <SkillIcon icon={unityIcon} title="Unity3D"/>
                                <SkillIcon icon={unrealIcon} title="Unreal 5"/>
                                <SkillIcon icon={cSharpIcon} title="C#"/>
                                <SkillIcon icon={cplusIcon} title="C++" style={{padding:6}}/>
                                <SkillIcon icon={blenderIcon} title="Blender" style={{padding:6}}/>
                                <SkillIcon icon={steamIcon} title="Steamworks" style={{padding:6}}/>
                                <SkillIcon icon={facepunchIcon} title="Facepunch" style={{padding: 6, borderRadius: 30}}/>
                                <SkillIcon icon={asepriteIcon} title="Aseprite" style={{padding:6}}/>
                                <SkillIcon icon={githubLogo} title="Git" style={{padding:6}} used={true}/>
                            </div>
                            
                        </div>

                        {/********************Frontend*********************/}
                        <div className='skill-category'>
                            <p style={{textAlign: 'center', fontSize: 38, fontWeight: 'bold'}}>Frontend</p>

                            <div className='skill-icon-container'>
                                <SkillIcon icon={reactIcon} title="React JS" used={true}/>                                   
                                <SkillIcon icon={htmlIcon} title="HTML" used={true}/>
                                <SkillIcon icon={cssIcon} title="CSS" style={{padding: 14}} used={true} />
                                <SkillIcon icon={jsIcon} title="JavaScript" used={true}/>
                                <SkillIcon icon={tsIcon} title="TypeScript" style={{borderRadius:60, padding: 2}} />
                            </div>

                        </div>

                        {/*****************Backend***********************/}
                        <div className='skill-category'>
                            <p style={{textAlign: 'center', fontSize: 38, fontWeight: 'bold'}}>Backend</p>

                            <div className='skill-icon-container'>
                                <SkillIcon icon={phpIcon} title=".php"/>                                   
                                <SkillIcon icon={sqlIcon} title="SQL" iconWidth={80}/>
                                <SkillIcon icon={awsIcon} title="AWS" style={{padding: 14}} />
                                <SkillIcon icon={pythonIcon} title="Python"/>
                                <SkillIcon icon={bitbucketIcon} title="Bitbucket"/>
                            </div>
                        </div>

                        {/********************************Mobile *********************/}
                        <div className='skill-category' >
                                <p style={{textAlign: 'center', fontSize: 38, fontWeight: 'bold'}}>Mobile</p>

                                <div className='skill-icon-container'>
                                    <SkillIcon icon={reactIcon} title="React-Native"/>                                   
                                    <SkillIcon icon={xcodeIcon} title="XCode"/>
                                    <SkillIcon icon={androidStudioIcon} title="Android Studio" />
                                    <SkillIcon icon={firebaseIcon} title="Firebase"/>
                                    <SkillIcon icon={gradleIcon} title="Gradle" />
                                </div>

                        </div>

                        {/********************************Other************************/}
                        <div className='skill-category'>
                                <p style={{textAlign: 'center', fontSize: 38, fontWeight: 'bold'}}>Other</p>

                                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                                    <SkillIcon icon={javaIcon} title="Java" style={{padding:10}}/>                                   
                                    <SkillIcon icon={reaperIcon} title="Reaper"/>
                                </div>

                        </div>
                        
                        <div style={{width: "33%"}}></div>
                    </div>

                        
            </div>

            {/*********************************************************************************************** */}

            {/*             *PORFOLIO CAROUSEL*          */}
            
                <div style={{marginTop: "10vh"}} ref={portfolioRef}>
                    <p className='section-title'>Portfolio</p>
                    <div style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
                    <span style={{fontSize: 15, fontStyle: 'italic', marginTop: -60, marginBottom: 30}}>Click the icon to go to the project page</span>
                    </div>
                    <PortfolioCarousel/>
                </div>
            {/********************************************* */}

        </div>
    )
}

export default Home;
