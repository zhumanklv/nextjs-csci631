import '../styles/globals.css'
import Head from 'next/head';
import {useState} from "react";
import {UserContext} from "../components/UserContext";

function MyApp({ Component, pageProps }) {
    const [user, setUser] = useState(null);
  return (
      <>
      <Head>
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
