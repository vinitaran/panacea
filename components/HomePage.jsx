import React from "react";
import EmailButton from "./EmailButton";
import SocialMediaIcons from "./SocialMediaIcons";

const HomePage = () => {
	return (
		<div className='home__main'>
			<div classname='homeTitle'>
				<h1>
					PAN<span className='aceText'>ACE</span>A
				</h1>
			</div>
			<div className='home__footer'>
				<EmailButton />
				<SocialMediaIcons />
			</div>
		</div>
	);
};

export default HomePage;
