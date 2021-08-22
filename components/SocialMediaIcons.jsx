import React from "react";
import { FaFacebook, FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialMediaIcons() {
	return (
		<div className='socialIcons'>
			<div>
				<FaFacebook className='media__icons' />
				<FaDiscord className='media__icons' />
				<FaInstagram className='media__icons' />
				<FaTwitter className='media__icons' />
			</div>
			<div>
				<h4>Organised By Indian Aces</h4>
			</div>
		</div>
	);
}
