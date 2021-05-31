import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id="main">
            <Navbar/>
            <div className="name">
                <h1>It's a <span>ReactJS</span>webite</h1>
                <p className="details">Most Calendars are designet for teams. This is for freelancers
                    who want simple way to to plan their schools
                </p>
                <div className="header-btns">
                    <a href="#" className="cv-btn">Hire me</a>
                    <a href="#" className="cv-btn1">Download App</a>
                </div>
            </div>
            <div className="arrow"></div>
        </div>
    )
}

export default Header
