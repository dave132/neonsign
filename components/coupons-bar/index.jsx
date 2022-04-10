import React from "react";
import styles from "./coupons-bar.module.scss";
import Link from "next/link";

export default function CouponsBar() {
  return (
    <Link href={"/"}>
      <a
        className={styles.CouponsBar_link}
        onClick={(e) => e.preventDefault()}
      ></a>
    </Link>
  );
}
