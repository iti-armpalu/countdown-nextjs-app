'use client'

import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {

  // Set the date to count down to in milliseconds
  // The getTime() method of Date instances returns the number of milliseconds
  const countDownDate = new Date(targetDate).getTime();

  // Set the initial date state
  // The initial date state is current date in milliseconds
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {

    // Set interval to update the count down every 1 second
    const interval = setInterval(() => {
      // Set the new date state to the time difference between target date and now (aka current date) in milliseconds
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    // The standard hook useEffect also helps with the component's life-cycle and performs necessary cleanup like clearing the interval.
    return () => clearInterval(interval);
  }, [countDownDate]);

  // Call the getReturnValues and pass the countDowb as a parameter to get days, hours, minutes, and seconds
  return getReturnValues(countDown);
};

// A function to calculate milliseconds to days, hours, minutes, and seconds
const getReturnValues = (milliseconds) => {
  // calculate time left
  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

  // Please note, as we have to return multiple values here, we can return them as an array or object. We have decided to return all the values in an array.
  return [days, hours, minutes, seconds];
};

export { useCountdown };
