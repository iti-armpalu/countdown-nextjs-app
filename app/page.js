import Countdown from '../components/countdown'
import styles from './page.module.css'

export default function Home() {

  // ---- Testing date start ----
  // const NOW_IN_MS = new Date().getTime();

  // const ONE_MIN_IN_MS = 10 * 1000;
  // const dateTimeAfterTenSec = NOW_IN_MS + TEN_SEC_IN_MS;

  // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  // ---- Testing date end ----

  // Set the future date (birthday) to count down to and pass it to the component
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/12/",
      birthday = dayMonth + yyyy;
  
  // Check the year and add a year if current date has passed birthday date
  today = `${mm}/${dd}/${yyyy}`;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }

  return (
    <main className={styles.main}>
      <Countdown targetDate={birthday} />
    </main>
  )
}
