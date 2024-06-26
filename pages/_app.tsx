import 'font-awesome/css/font-awesome.min.css'; 
import 'elegant-icons/style.css';
import 'et-line/style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/scss/bootstrap.scss';
// import 'bootstrap/scss/bootstrap.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../styles/animated.css';
import '../styles/aos.css';
import '../styles/style.scss';
import type { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
