import React from "react";
import styles from "./hero.module.scss";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={styles.home_page_hero}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-5 text-center text-md-start text-lg-center">
            <div className={styles.hero_content}>
              <h2>Create Your Own Neon Sign</h2>
              <Link href={"/#"}>
                <a
                  className={styles.cta_link}
                  onClick={(e) => e.preventDefault()}
                >
                  {"let's do it"}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
