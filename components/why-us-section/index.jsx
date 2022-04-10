import React from "react";
import Image from "next/image";
import styles from "./section.module.scss";

export default function WhyUsSection() {
  return (
    <section className="pt-5 py-3">
      <div className="container pt-md-3">
        <h1 className="sec_heading">
          <span>WHY CHOOSE US?</span>
        </h1>
        <div className="row">
          <div className="my-3 my-md-4 col-12 col-md-4">
            <div className="d-flex flex-column text-center align-items-center">
              <div className={styles.image_wrapper}>
                <Image
                  alt="warranty_icon"
                  layout="fixed"
                  width={185}
                  height={185}
                  src={"/assets/images/why-us/warranty.webp"}
                  quality={100}
                  loading="eager"
                />
              </div>
              <h4 className={styles.card_title}>Shopping & Warranty</h4>
              <p>
                provide one year warranty service! We offer high-quality
                handmade neon signs for homes or businesses that are both
                affordable and quickly-made. Our workshop is open 24/7 to ensure
                2-week delivery while maintaining product quality of the highest
                standard. We may be a small team, but each custom-designed neon
                sign created by us is made with love and care.
              </p>
            </div>
          </div>
          <div className="my-3 my-md-4 col-12 col-md-4">
            <div className="d-flex flex-column text-center align-items-center">
              <div className={styles.image_wrapper}>
                <Image
                  alt="shipping_icon"
                  layout="fixed"
                  width={185}
                  height={185}
                  src={"/assets/images/why-us/shipping.webp"}
                  quality={100}
                  loading="eager"
                />
              </div>
              <h4 className={styles.card_title}>Free Worldwide Shipping</h4>
              <p>
                No matter where you are, we will use the most reliable delivery
                for you!
              </p>
              <p>
                Are originality and creativity important to you? Well, we have
                more than 1000 fabulous designs to choose from, ranging in size,
                colors, and themes. Our exclusive designs will fit any interior,
                be it your bedroom, music studio, bar, or even an office. Come
                on and light up your days!
              </p>
            </div>
          </div>
          <div className="my-3 my-md-4 col-12 col-md-4">
            <div className="d-flex flex-column text-center align-items-center">
              <div className={styles.image_wrapper}>
                <Image
                  alt="install_icon"
                  layout="fixed"
                  width={185}
                  height={185}
                  src={"/assets/images/why-us/install.webp"}
                  quality={100}
                  loading="eager"
                />
              </div>
              <h4 className={styles.card_title}>Easy To Install</h4>
              <p>
                They rise like a picture frame and plug in like a lamp!
                Lightweight, no heat and no noise! Winning!
              </p>
              <p>
                We offer high-quality handmade neon signs for homes or
                businesses that are both affordable and quickly-made. Our
                workshop is open 24/7 to ensure 2-week delivery while
                maintaining product quality of the highest standard. We may be a
                small team, but each custom-designed neon sign created by us is
                made with love and care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
