import React from "react";
import TopAdBar from "../top-ad-bar";
import Footer from "../footer";
import Menu from "../menu";
import Header from "../header";

export default function Layout({
  children,
  navMenuOpen,
  setNavMenuOpen,
  cartModalOpen,
  setCartModalOpen,
  userModalOpen,
  setUserModalOpen,
}) {
  return (
    <>
      <TopAdBar />
      <Header
        userModalOpen={userModalOpen}
        setUserModalOpen={setUserModalOpen}
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
        cartModalOpen={cartModalOpen}
        setCartModalOpen={setCartModalOpen}
      />
      {children}
      <Menu />
      <Footer />
    </>
  );
}
