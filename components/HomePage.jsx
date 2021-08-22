import React from "react";
import EmailButton from "./EmailButton";
import SocialMediaIcons from "./SocialMediaIcons";

const HomePage = () => {
	return (
		<div className='home__main'>
			<div className='homeTitle'>
				<h1>
					PAN<span className='aceText'>ACE</span>A
				</h1>
				<h2 id='subheading'>Asexuality Asia Conference 2021</h2>
			</div>
			<div className='homeContent'>
				<h2 id='date'>October 25th 2021 - October 31st 2021</h2>
				<h3 id='tagLine'>
					World's first conference dedicated to the asexual community of Asia!
				</h3>
				<h4>
					Contact for queries,partnerships and collaboration:{" "}
					<a href=''>asexuality.asia@gmail.com</a>{" "}
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
