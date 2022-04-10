import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/fonts.scss";
import "../styles/global.scss";
import Head from "next/head";

import Layout from "../components/layout";
import MobileNavMenu from "../components/mob-nav-menu";
import CartModal from "../components/cart-modal";
import UserSignInModal from "../components/user-sign-modal";
import React, { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>
          HDJ Sign | Custom Neon Signs Light, LED Neon Sign, 100% Handmade
        </title>
        <link rel="shortcut icon" href="/favicon.webp" type="image/x-icon" />
      </Head>
      <Layout
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
        cartModalOpen={cartModalOpen}
        setCartModalOpen={setCartModalOpen}
        userModalOpen={userModalOpen}
        setUserModalOpen={setUserModalOpen}
      >
        <Component {...pageProps} />
      </Layout>
      <MobileNavMenu open={navMenuOpen} setOpen={setNavMenuOpen} />
      <CartModal open={cartModalOpen} setOpen={setCartModalOpen} />
      <UserSignInModal open={userModalOpen} setOpen={setUserModalOpen} />
    </>
  );
}

export default MyApp;
