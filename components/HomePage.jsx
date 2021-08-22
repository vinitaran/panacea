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
				<h2 id='subheading'>Asexuality Asia Conference 2021</h2>
			</div>
			<div className='homeContent'>
				<h2 id='date'>October 25th - October 31st, 2021</h2>
				<h3 id='tagLine'>
					World's first conference dedicated to the asexual community of Asia!
				</h3>
				<h4>
					Contact for queries, partnerships and collaboration:{" "}
					<a target='_blank' href='mailto:asexuality.asia@gmail.com'>asexuality.asia@gmail.com</a>{" "}
					
				</h4>
			</div>
			<div className='home__footer'>
				<EmailButton />
				<SocialMediaIcons />
			</div>
		</div>
	);
};

export default HomePage;
