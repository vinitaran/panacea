import React, {useRef, useState} from "react";
import EmailButton from "./EmailButton";
import SocialMediaIcons from "./SocialMediaIcons";

const HomePage = () => {
	const asiaRef = useRef();
	const [className1, setClassName1] = useState("aceText");

	// setInterval(() => {
	// 	// console.log(asiaRef.current.className);
	// 	if(asiaRef.current?.className === "aceText"){
	// 		setClassName1("asiaText")
	// 		// console.log(asiaRef.current.className);
	// 	}else{
	// 		setClassName1("aceText")
	// 		// console.log(asiaRef.current.className);
	// 	}		
	// }, 10000);

	

	return (
		<div className='home__main'>
			<div className='homeTitle'>
				<h1>
					PAN<span className={className1} ref={asiaRef}>{`${className1}` === "aceText" ? "ACE" : "ASI"}</span>A
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
