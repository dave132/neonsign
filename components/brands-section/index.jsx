import React from "react";
import Image from "next/image";
import styles from "./section.module.scss";

export default function BrandsSection() {
  return (
    <section className="pt-5 py-3">
      <div className="container pt-md-3">
        <h1 className="sec_heading">
          <span>BRANDS THAT CHOSE US</span>
        </h1>
        <div className="py-4">
          <div className="d-md-none">
            <Image
              alt="brands_section_bg"
              layout="responsive"
              width={100}
              height={100}
              src={"/assets/images/brands_sm.webp"}
              quality={100}
              loading="eager"
            />
          </div>
          <div className="d-none d-md-block">
            <Image
              alt="brands_section_bg"
              layout="responsive"
              width={100}
              height={45}
              src={"/assets/images/brands_lg.webp"}
              quality={100}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
