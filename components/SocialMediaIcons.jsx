import React from "react";
import Link from "next/link";
import { FaFacebook, FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialMediaIcons() {
	return (
		<div className='socialIcons'>
			<div>
				<Link href='https://www.facebook.com/IndianAces/'>
					<FaFacebook className='media__icons' />
				</Link>
				<Link href=''>
					<FaDiscord className='media__icons' />
				</Link>
				<Link href=''>
					<FaInstagram className='media__icons' />
				</Link>
				<Link href='https://twitter.com/IndianAces_'>
					<FaTwitter className='media__icons' />
				</Link>
			</div>
			<div>
				<h4>Organised By Indian Aces</h4>
			</div>
		</div>
	);
}
