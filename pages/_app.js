import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header/>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

export default MyApp;
