import '../styles/globals.css'
import Head from 'next/head';
import {useState} from "react";
import {UserContext} from "../components/UserContext";

function MyApp({ Component, pageProps }) {
    const [user, setUser] = useState({name: 'NAN'});
  return (
      <>
      <Head>
          <script src="https://code.jquery.com/jquery-3.4.1.min.js"
                  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
      </Head>
          <UserContext.Provider value={[user, setUser]}>
              <Component {...pageProps} />
          </UserContext.Provider>
      </>
  );

}

export default MyApp
