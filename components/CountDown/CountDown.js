import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import daysInYears from '../helpers/daysInYears';
import CountDownBox from '../CountDown/CountDownBox';

let interval;

const Countdown = ({ date }) => {
  const now = new Date();
  const selectedDate = new Date(date);
  const millisecondsLeft = selectedDate.getTime() - now.getTime();
  const dLeft = Math.floor(millisecondsLeft / (1000 * 60 * 60 * 24));
  const daysInSelectedYear = daysInYears(selectedDate.getFullYear());

  const yearsLeft = Math.floor(dLeft / daysInSelectedYear);
  const daysLeft = dLeft <= 0 ? 0 : dLeft - (yearsLeft * daysInSelectedYear);
  const hoursLeft = Math.floor((millisecondsLeft / (1000 * 60 * 60)) % 24);
  const minutesLeft = Math.floor((millisecondsLeft / (1000 * 60)) % 60);
  const secondsLeft = Math.floor((millisecondsLeft / 1000) % 60);

  const yearsLeftOutput = yearsLeft < 10 ? '0' + yearsLeft : yearsLeft;
  const daysLeftOutput = daysLeft < 10 ? '0' + daysLeft : daysLeft;
  const hoursLeftOutput = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
  const minutesLeftOutput = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  const secondsLeftOutput = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
  
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    years: yearsLeft > 0 ? yearsLeftOutput : '00',
    days: daysLeft > 0 ? daysLeftOutput : '00',
    hours: hoursLeft > 0 ? hoursLeftOutput : '00',
    minutes: minutesLeft > 0 ? minutesLeftOutput : '00',
    seconds: secondsLeft > 0 ? secondsLeftOutput : '00'
  });

  useEffect(() => { 
    if(completed) {
      clearInterval(interval);
    }
  }, [completed]);

  useEffect(() => {
    if(!completed) {
      interval = setInterval(() => {
        if(millisecondsLeft > 0) {
          setTimeLeft({
            years: yearsLeftOutput,
            days: daysLeftOutput,
            hours: hoursLeftOutput,
            minutes: minutesLeftOutput,
            seconds: secondsLeftOutput
          });
        }else {
          setTimeLeft({
            years: '00',
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
          });
          setCompleted(true);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    }
  }, [selectedDate, now, completed, yearsLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft, millisecondsLeft, yearsLeftOutput, daysLeftOutput, hoursLeftOutput, minutesLeftOutput, secondsLeftOutput]);

  return(
    <Fragment>
      
      <div className="countdown">
       
        <CountDownBox 
          left={timeLeft.days}
          divideBy={daysInSelectedYear}
          label="days"
        />
        <CountDownBox 
          left={timeLeft.hours}
          divideBy={24}
          label="hours"
        />
        <CountDownBox 
          left={timeLeft.minutes}
          divideBy={60}
          label="minutes"
        />
        <CountDownBox 
          left={timeLeft.seconds}
          divideBy={60}
          label="seconds"
        />
      </div>
    </Fragment>
  );
}

Countdown.propTypes = {
  date: PropTypes.string.isRequired
}

export default Countdown;