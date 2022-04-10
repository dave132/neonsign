import React from "react";
import styles from "./shop-section.module.scss";
import Link from "next/link";

export default function ShopSection() {
  return (
    <section className={styles.shop_section}>
      <div className="container">
        <div className="row">
          <div className="offset-lg-1 col">
            <p className="m-0">The Best For Home</p>
            <h1 className="py-2">LED Neon Signs</h1>
            <Link href={"/#"}>
              <a onClick={(e) => e.preventDefault()} className={styles.cta_btn}>
                shop the collection
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
