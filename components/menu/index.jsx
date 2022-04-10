import React from "react";
import styles from "./menu.module.scss";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { FaPinterestP, FaFacebookF } from "react-icons/fa";

export default function Menu() {
  return (
    <menu className={styles.menu}>
      <div className="container py-5">
        <div className="row">
          <div className="my-3 col-12 col-lg-3">
            <div className="menu_col_container">
              <div className="hdj_sign_logo">
                <Link href={"/"}>
                  <a>
                    <Image
                      alt="HDJ-Sign-logo-Custom-Neon-Sign"
                      src={"/assets/images/HDJ-Sign-logo-Custom-Neon-Sign.webp"}
                      layout="fixed"
                      width={95}
                      height={45}
                      quality={100}
                      loading="eager"
                    />
                  </a>
                </Link>
                <p className={`my-3 ${styles.support_email}`}>
                  Email: support@hdjsign.com
                </p>
                <div className={styles.social_links_list}>
                  <a
                    href="https://www.facebook.com/HDJsign-102122222360951"
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                    title="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/hdj_sign"
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                    title="Instagram"
                  >
                    <BsInstagram />
                  </a>
                  <a
                    href="https://www.pinterest.com/HDJSign_Official"
                    target={"_blank"}
                    rel={"noreferrer noopener"}
                    title="Pinterest"
                  >
                    <FaPinterestP />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="menu_col_container">
              <p className={styles.list_title}>information</p>
              <ul className={styles.menu_links_list}>
                <li className={styles.list_item}>
                  <Link href={"/#"}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className={`${styles.list_link} underlined`}
                    >
                      about us
                    </a>
                  </Link>
                </li>
                <li className={styles.list_item}>
                  <Link href={"/contact-us"}>
                    <a className={`${styles.list_link} underlined`}>
                      contact us
                    </a>
                  </Link>
                </li>
                <li className={styles.list_item}>
                  <Link href={"/#"}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className={`${styles.list_link} underlined`}
                    >
                      privacy policy
                    </a>
                  </Link>
                </li>
                <li className={styles.list_item}>
                  <Link href={"/#"}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className={`${styles.list_link} underlined`}
                    >
                      terms of service
                    </a>
                  </Link>
                </li>
                <li className={styles.list_item}>
                  <Link href={"/#"}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className={`${styles.list_link} underlined`}
                    >
                      refund policy
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-3 col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="menu_col_container">
              <p className={styles.list_title}>customer service</p>
              <ul className={styles.menu_links_list}>
                <li className={styles.list_item}>
                  <Link href={"/#"}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className={`${styles.list_link} underlined`}
                    >
                      track order
                    </a>
                  </Link>
                </li>
                <li className={styles.list_item}>
                  <Link href={"/#"}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className={`${styles.list_link} underlined`}
                    >
                      FAQs
                    </a>
                  </Link>
                </li>
                <li className={styles.list_item}>
                  <Link href={"/#"}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className={`${styles.list_link} underlined`}
                    >
                      shipping
                    </a>
                  </Link>
                </li>
                <li className={styles.list_item}>
                  <Link href={"/#"}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className={`${styles.list_link} underlined`}
                    >
                      returns
                    </a>
                  </Link>
                </li>
                <li className={styles.list_item}>
                  <Link href={"/#"}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className={`${styles.list_link} underlined`}
                    >
                      payment
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-3 col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="menu_col_container">
              <p className={styles.list_title}>about COVID-19</p>
              <ul className={styles.menu_links_list}>
                <li className={styles.list_item}>
                  <Link href={"/#"}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className={`${styles.list_link} underlined`}
                    >
                      DELIVERY DELAYS DUE TO COVID-19
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-3 col-12 col-sm-8 col-md-6 col-lg-3">
            <div className="menu_col_container">
              <p className={styles.list_title}>Newsletter Sign Up</p>
              <span>
                Receive our updates about our products and promotions.
              </span>
              <div className={styles.signup_form_wrapper}>
                <form className="py-2" onSubmit={(e) => e.preventDefault()}>
                  <label htmlFor="email_input" className="d-none"></label>
                  <input
                    required
                    placeholder="enter your email address"
                    type="email"
                    name="email"
                    id="email_input"
                  />
                  <button type="submit">submit</button>
                </form>
              </div>
              <div className="mt-4 position-relative">
                <Image
                  alt="features_and_payments"
                  src="/assets/images/menu_img.webp"
                  width={300}
                  height={136}
                  layout="responsive"
                  quality={100}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </menu>
  );
}
