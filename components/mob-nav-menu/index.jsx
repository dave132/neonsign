import React from "react";
import Modal from "../modal";
import Box from "@mui/material/Box";
import styles from "./style.module.scss";
import { BiX } from "react-icons/bi";
import Link from "next/link";

const style = {
  position: "absolute",
  left: "0",
  top: "0",
  outline: "none",
  overflow: "hidden",
};

export default function MobileNavMenu({ open, setOpen }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Box sx={style}>
        <div className="d-flex align-items-start justify-content-start">
          <div className={styles.mob_nav_menu_wrapper}>
            <ul className={styles.mob_nav_list}>
              <li className={styles.list_item} onClick={() => setOpen(false)}>
                <Link href="/">
                  <a className={styles.link}>home</a>
                </Link>
              </li>
              <li className={styles.list_item} onClick={() => setOpen(false)}>
                <Link href="/best-seller-neon-signs">
                  <a className={styles.link}>best seller</a>
                </Link>
              </li>
              <li className={styles.list_item} onClick={() => setOpen(false)}>
                <Link href="/N_A">
                  <a
                    className={styles.link}
                    onClick={(e) => e.preventDefault()}
                  >
                    custom neon signs
                  </a>
                </Link>
              </li>
              <li className={styles.list_item} onClick={() => setOpen(false)}>
                <Link href="/N_A">
                  <a
                    className={styles.link}
                    onClick={(e) => e.preventDefault()}
                  >
                    uploda an image
                  </a>
                </Link>
              </li>
              <li className={styles.list_item} onClick={() => setOpen(false)}>
                <Link href="/N_A">
                  <a
                    className={styles.link}
                    onClick={(e) => e.preventDefault()}
                  >
                    shop
                  </a>
                </Link>
              </li>
              <li className={styles.list_item} onClick={() => setOpen(false)}>
                <Link href="/contact-us">
                  <a className={styles.link}>contact us</a>
                </Link>
              </li>
            </ul>
          </div>
          <button
            className={styles.close_modal_btn}
            onClick={() => setOpen(false)}
          >
            <BiX />
          </button>
        </div>
      </Box>
    </Modal>
  );
}
