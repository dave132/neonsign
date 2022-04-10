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

export default function UserSignInModal({ open, setOpen }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Box sx={style}>
        <div className="d-flex align-items-start justify-content-start">
          <div className={styles.user_sign_modal_wrapper}>
            <div className="d-flex py-3 align-items-center justify-content-between">
              <h5 className={styles.modal_title}>sign in</h5>
              <button
                className={styles.modal_close_btn}
                onClick={() => setOpen(false)}
              >
                <BiX />
              </button>
            </div>
            <div className="">
              <form
                className={styles.sign_in_form}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="mb-3 mx-2">
                  <label className="mb-1 d-block" htmlFor="email">
                    email address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email address"
                  />
                </div>
                <div className="mx-2 mb-3">
                  <label className="mb-1 d-block" htmlFor="password">
                    password
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                </div>
                <div className="text-center mx-2 my-2">
                  <button type="submit" className={styles.cta_link}>
                    log in
                  </button>
                </div>
              </form>
              <div className="text-center pt-3">
                <Link href="/recover">
                  <a
                    className={`underlined ${styles.recover_btn}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot your password?
                  </a>
                </Link>
              </div>
              <div className="text-center mx-2 pt-4">
                <Link href="/sign-up">
                  <a
                    className={`${styles.cta_link} ${styles.signup_btn}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    create an account
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
