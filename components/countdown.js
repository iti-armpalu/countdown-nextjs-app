"use client";

import React, { useEffect, useRef, useState } from "react";
import { useCountdown } from "../hooks/useCountdown";
import DateTimeDisplay from "./dateTimeDisplay";
import { useGenerateColor } from "@/hooks/useGenerateColor";
import { useReward } from "react-rewards";

const ExpiredNotice = () => {
  const { reward: confettiPartyReward, isAnimating: isConfettiPartyAnimating } =
    useReward("confettiPartyReward", "emoji", {
      emoji: ['🥳']
    });
  const { reward: confettiReward, isAnimating: isConfettiAnimating } =
    useReward("confettiReward", "emoji", {
      emoji: ["🎉"],
    });
  const { reward: confettiCakeReward, isAnimating: isConfettiCakeAnimating } =
    useReward("confettiCakeReward", "emoji", {
      emoji: ["🎂"],
    });

  return (
    <div className="container" style={{ backgroundColor: "#ffffed" }}>
      <h1>It's my birthday</h1>
      <div className="emoji">
        <button
          disabled={isConfettiPartyAnimating}
          onClick={confettiPartyReward}
        >
          <span id="confettiPartyReward">🥳</span>
          <p>Press for more party</p>
        </button>
        <button 
          disabled={isConfettiAnimating} 
          onClick={confettiReward}
        >
          <span id="confettiReward">🎉</span>
          <p>Press for more confetti</p>
        </button>
        <button 
          disabled={isConfettiCakeAnimating} 
          onClick={confettiCakeReward}
        >
          <span id="confettiCakeReward">🎂</span>
          <p>Press for more cake</p>
        </button>
      </div>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  const { randomColor } = useGenerateColor();

  // Need to remove the content from initial render because of hydration error - server-side & client-side "seconds" differ and throws an error
  // https://stackoverflow.com/questions/72673362/error-text-content-does-not-match-server-rendered-html
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className="container" style={{ backgroundColor: randomColor }}>
      {hydrated && (
        <>
          <h1>Countdown to my birthday</h1>
          <div>
            <ul>
              <DateTimeDisplay value={days} type={"days"} />
              <DateTimeDisplay value={hours} type={"hours"} />
              <DateTimeDisplay value={minutes} type={"minutes"} />
              <DateTimeDisplay value={seconds} type={"seconds"} />
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

const Countdown = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default Countdown;
