import React from "react";
import Modal from "../modal";
import Box from "@mui/material/Box";
import styles from "./style.module.scss";
import { BiX } from "react-icons/bi";
import Link from "next/link";

const style = {
  position: "absolute",
  right: "0",
  top: "0",
  outline: "none",
  overflow: "hidden",
};

export default function CartModal({ open, setOpen }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Box sx={style}>
        <div className="d-flex align-items-start justify-content-start">
          <div className={styles.cart_modal_wrapper}>
            <div className="d-flex py-3 align-items-center justify-content-between">
              <h5 className={styles.modal_title}>your bag</h5>
              <button
                className={styles.modal_close_btn}
                onClick={() => setOpen(false)}
              >
                <BiX />
              </button>
            </div>
            <div className="text-center">
              <p>Your cart is currently empty.</p>
              <Link href="/best-seller-neon-signs">
                <a className={styles.cta_link} onClick={() => setOpen(false)}>
                  continue shopping
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
