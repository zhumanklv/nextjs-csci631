import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <>
      <div className={styles.intro}>
        <nav className={styles.navBar}>
          <ul className={styles.navBarList}>
                <li className={styles.navBarListItem}><Link href="/">Home</Link></li>
                <li className={styles.navBarListItem}><Link href="/">Rooms</Link></li>
                <li className={styles.navBarListItem}><Link href="/login">Log in</Link></li>
          </ul>
        </nav>
        <div className={styles.introMain}>
          <div className={styles.introMainFirst}>Welcome to</div>
          <div className={styles.introMainSecond}>FIZMAT</div>
          <div className={styles.introMainFirst}>hotels</div>
          <div className={styles.introMainThird}>Book your stay and enjoy FIZMAT</div>
          <div className={styles.introMainThird}>redefined at the most affordable rates</div>
        </div>
      </div>

      <div className={styles.main}>
          <div className={styles.mainTop}>All our room types are including complementary breakfast</div>
          <div className={styles.mainContent}>
              <div className={styles.mainContentInner}>
                  <div>
                      <div className={styles.mainContentInnerTitle}>Fizmat redefined</div>
                      <div className={styles.mainContentInnerText}>Our rooms are designed to transport you into an environment made for leisure.
                          Take your mind off the day-to-day of home life and find a private paradise for yourself.
                      </div>
                      <div className={styles.mainContentInnerLink}><Link href="/"><div style={{ cursor: 'pointer'}}>Rooms</div></Link></div>
                  </div>
              </div>
              <div><Image src='/download.jpeg' alt="room picture" width={866} height={579}/></div>

          </div>
      </div>

      </>
  )
}
