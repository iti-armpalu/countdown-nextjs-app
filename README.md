This is a simple countdown timer to a specific date built with NextJS.

The app includes:

- custom useCountdown hook: returns the target date and current date difference in days, hours, minutes and seconds. The hook uses useEffect hook to update the count down every 1 second.
- custom useGenerateColor hook: returns a random HSL color that is used to set a random app background color on every mount.
- react-rewards package: adds micro-interacions to the component when timer has reached the target. 

