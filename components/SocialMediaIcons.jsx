import React from "react";
import Link from "next/link";
import { FaFacebook, FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialMediaIcons() {
	return (
		<div className='socialIcons'>
			<div>
				<Link href='https://www.facebook.com/IndianAces/'>
					<FaFacebook className='media__icons' size={23}/>
				</Link>
				<Link href=''>
					<FaDiscord className='media__icons' size={23} />
				</Link>
				<Link href=''>
					<FaInstagram className='media__icons' size={23} />
				</Link>
				<Link href='https://twitter.com/IndianAces_'>
					<FaTwitter className='media__icons' size={23} />
				</Link>
			</div>
			<div>
				<h4>Organised By <a target="_blank" href="http://indianaces.org/">IndianAces</a></h4>
			</div>
		</div>
	);
}
