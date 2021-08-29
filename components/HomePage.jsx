import React, { useRef, useState, useEffect } from "react";
import EmailButton from "./EmailButton";
import SocialMediaIcons from "./SocialMediaIcons";
import CountDownTimer from "./CountDownTimer";
import { motion } from "framer-motion";

const HomePage = () => {
	const asiaRef = useRef();
	return (
		<div className='home__main'>
			<div className='homeTitle'>
				<h1>
					PAN
					<motion.span
						style={{
							opacity: 0,
							marginLeft: -100,
						}}
						animate={{
							opacity: 1,
							marginLeft: 0,
						}}
						transition={{
							type: "spring",
							stiffness: 60,
							yoyo: Infinity,
							duration: 1.1,
						}}
						className='aceText'></motion.span>
					A
				</h1>
				{/* <h1>PAN<span className="aceText"></span>A</h1> */}
				<CountDownTimer />
				<h2 id='subheading'>Asexuality Asia Conference 2021</h2>
			</div>

			<div className='homeContent'>
				<h2 id='date'>October 25th - October 31st, 2021</h2>
				<h3 id='tagLine'>
					World's first conference dedicated to the asexual community of Asia!
				</h3>
				<h4 id='contact'>
					Contact for queries, partnerships and collaboration:{" "}
					<a target='_blank' href='mailto:asexuality.asia@gmail.com'>
						asexuality.asia@gmail.com
					</a>{" "}
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
