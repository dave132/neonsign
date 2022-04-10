import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/dist/client/link";

export default function CollectionsSection() {
  return (
    <section className={styles.collections_section}>
      <div className="container py-5">
        <div className="row">
          <div className="my-3 col-12 col-md-6">
            <div className={styles.images_weapper}>
              <Link href={"/#"}>
                <a onClick={(e) => e.preventDefault()}>
                  <Image
                    alt="collection_img"
                    src={"/assets/images/collections/wedding.webp"}
                    layout="responsive"
                    width={100}
                    height={100}
                    quality={100}
                    loading="eager"
                  />
                </a>
              </Link>
              <h6 className={styles.card_title}>wedding & neon</h6>
            </div>
          </div>
          <div className="my-3 col-12 col-md-6">
            <div className={styles.images_weapper}>
              <Link href={"/#"}>
                <a onClick={(e) => e.preventDefault()}>
                  <Image
                    alt="collection_img"
                    src={"/assets/images/collections/bar.webp"}
                    layout="responsive"
                    width={100}
                    height={100}
                    quality={100}
                    loading="eager"
                  />
                </a>
              </Link>
              <h6 className={styles.card_title}>bar & neon</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
