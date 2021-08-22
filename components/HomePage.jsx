import React from 'react';
import EmailButton from "./EmailButton";
import SocialMediaIcons from "./SocialMediaIcons";

const HomePage = () => {
    return (
            <div className="home__main">
            <h1>
					PAN<span className='aceText'>ACE</span>A
				</h1>

				<EmailButton />
				<SocialMediaIcons />
        </div>
    )
}

export default HomePage
