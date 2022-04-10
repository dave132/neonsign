import React from "react";
import styles from "./cta-btn.module.scss";

export default function CtaBtn({ disabled, button, label, func }) {
  if (button) {
    return (
      <button onClick={func} disabled={disabled} className={styles.cta_btn}>
        {label}
      </button>
    );
  } else {
    return <></>;
  }
}
