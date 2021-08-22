import Head from "next/head";
import Image from "next/image";
import EmailButton from "../components/EmailButton";
import Logo from "../components/Logo";
// import SocialMediaIcons from "../components/SocialMediaIcons";

export default function Home() {
	return (
		<div>
			<Head>
				<title>PANACEA 2021</title>
				<meta name='description' content='Asia Asexuality Conference 2021' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='mainBody'>
				
			{/* <div className='imageHolder'>
			<h1>
					PAN<span className='aceText'>ACE</span>A
				</h1>

				<EmailButton />
			</div> */}

			<img src="https://media.wired.com/photos/5e618502dd088e00081102a9/2:1/w_2400,h_1200,c_limit/Biz-conference-187591171.jpg" />
				
			{/* <SocialMediaIcons />	 */}
			</div>
		</div>
	);
}
