import React from "react";
import styles from "./section.module.scss";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="pt-5">
      <div className="container pt-md-3">
        <h1 className="sec_heading">
          <span>#FOLLOW US ON INSTAGRAM</span>
        </h1>
        <div className="row g-0 pt-5">
          <div className={styles.gallery_grid}>
            {[...Array(14)].map((_, i) => (
              <div
                key={i + 1}
                className={`${styles[`grid_${i + 1}`]} ${
                  styles.gallery_grid_img_wrapper
                }`}
              >
                <Image
                  alt={`gallery_image_${i + 1}`}
                  layout="fill"
                  src={`/assets/images/gallery/${i + 1}.webp`}
                  quality={100}
                  loading="eager"
                  objectPosition={"center"}
                  objectFit={"cover"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
