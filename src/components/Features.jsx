import React from 'react'
import featureimage from "../images/Frame 19.png";

function Features() {
    return (
        <div id="features">
            <div className="features-model">
                <img src={featureimage} alt="features-image" />
            </div>
            <div className="features-text">
                <h2>Features</h2>
                <h3>This Application <span>Software</span> is Art</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Ab ad dolore eligendi! Veniam exercitationem molestias dolore voluptatum natus, numquam nesciunt laborum?
                   Dignissimos ea molestias cupiditate voluptatibus laudantium eum iste consequatur doloribus esse eius? Eum aspernatur,
                    nostrum error eos neque magni.</p>
                    <button>View More Features</button>
            </div>
        </div>
    )
}

export default Features
