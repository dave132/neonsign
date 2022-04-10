import React from "react";
import styles from "./header.module.scss";
import Link from "next/dist/client/link";
import Image from "next/image";
import {
  RiShoppingCartLine,
  RiHeart3Line,
  RiSearch2Line,
} from "react-icons/ri";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";

export default function Header({
  navMenuOpen,
  setNavMenuOpen,
  cartModalOpen,
  setCartModalOpen,
  userModalOpen,
  setUserModalOpen,
}) {
  return (
    <header className={styles.Header}>
      <div className="container pt-lg-3 pb-lg-2">
        <div className="row align-items-center">
          <div className="col-3 d-lg-none">
            <div className="align-items-center d-flex">
              <button className="me-3" onClick={() => setNavMenuOpen(true)}>
                <AiOutlineMenu />
              </button>
              <button className="ms-sm-3">
                <RiSearch2Line />
              </button>
            </div>
          </div>
          <div className="col-6 col-lg-2 mt-2">
            <div className="brand_logo text-center text-lg-start">
              <Link href={"/"}>
                <a>
                  <Image
                    alt="HDJ-Sign-logo-Custom-Neon-Sign"
                    src="/assets/images/HDJ-Sign-logo-Custom-Neon-Sign.webp"
                    layout="fixed"
                    width={95}
                    height={45}
                    quality={100}
                    loading="eager"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-3 d-lg-none">
            <div className="align-items-center justify-content-end d-flex">
              <button
                className="me-sm-3"
                onClick={() => setUserModalOpen(true)}
              >
                <AiOutlineUser />
              </button>
              <div className="ms-3 d-inline-flex">
                <button onClick={() => setCartModalOpen(true)}>
                  <RiShoppingCartLine />
                </button>
                <span className={`d-none d-sm-flex ${styles.cart_items_count}`}>
                  0
                </span>
              </div>
            </div>
          </div>
          <div className="col-7 d-none d-lg-block">
            <nav className={styles.header_nav}>
              <ul className={styles.nav_list}>
                <li className={styles.nav_item}>
                  <Link href={"/"}>
                    <a className={`underlined ${styles.nav_link}`}>home</a>
                  </Link>
                </li>
                <li className={styles.nav_item}>
                  <Link href={"/best-seller-neon-signs"}>
                    <a className={`underlined ${styles.nav_link}`}>
                      best seller
                    </a>
                  </Link>
                </li>
                <li className={`${styles.nav_item} ${styles.hot}`}>
                  <Link href={"/#"}>
                    <a
                      className={`underlined ${styles.nav_link}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      custom neon signs
                    </a>
                  </Link>
                </li>
                <li className={styles.nav_item}>
                  <Link href={"/#"}>
                    <a
                      className={`underlined ${styles.nav_link}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      upload an image
                    </a>
                  </Link>
                </li>
                <li className={`${styles.nav_item} ${styles.hot}`}>
                  <Link href={"/#"}>
                    <a
                      className={`underlined ${styles.nav_link}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      shop
                    </a>
                  </Link>
                </li>
                <li className={styles.nav_item}>
                  <Link href={"/contact-us"}>
                    <a className={`underlined ${styles.nav_link}`}>
                      contact us
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-3 d-none d-lg-block">
            <div className="text-end">
              <ul className={styles.actions_list}>
                <li>
                  <button onClick={() => setUserModalOpen(true)}>
                    sign in
                  </button>
                </li>
                <li>
                  <button>
                    <RiSearch2Line />
                  </button>
                </li>
                <li>
                  <button>
                    <RiHeart3Line />
                  </button>
                </li>
                <li className="d-flex align-items-center">
                  <button onClick={() => setCartModalOpen(true)}>
                    <RiShoppingCartLine />
                    <span className={`${styles.cart_items_count} ms-1`}>0</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
