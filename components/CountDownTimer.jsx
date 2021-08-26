import React from "react";
import Countdown from "./CountDown/CountDown";

const CountDownTimer = () => {
	return (
		<div className='countDown_wrapper'>
			<Countdown date='October 25 2021 09:00 GMT+05:30' />
		</div>
	);
};

export default CountDownTimer;
