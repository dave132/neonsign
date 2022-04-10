import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";
import Link from "next/link";
import StarRatings from "react-star-ratings";
import { RiHeart3Line } from "react-icons/ri";

export default function Card({ product }) {
  return (
    <div className="my-4 col-12 col-sm-6 col-md-4 col-lg-3">
      <div className={`${styles.product_card}`}>
        <Link href={"/#"}>
          <a onClick={(e) => e.preventDefault()}>
            <div className={`${styles.product_image} mb-3`}>
              {product?.discount && (
                <span className={styles.discount_value}>
                  -{product?.discount} %
                </span>
              )}
              <Image
                alt="product_image"
                src={`/assets/images/cards/${product?.id}.webp`}
                width={100}
                height={100}
                layout="responsive"
                quality={100}
              />
            </div>
          </a>
        </Link>
        <Link href={"/#"}>
          <a
            className={styles.product_name}
            onClick={(e) => e.preventDefault()}
          >
            {product?.name}
          </a>
        </Link>
        <div className="py-3">
          <div className="my-1">
            <div className="d-flex align-items-center">
              <StarRatings
                rating={product?.rating}
                starRatedColor="rgb(253,188,0)"
                numberOfStars={5}
                name="rating"
                isSelectable={true}
                starDimension={"18px"}
                starSpacing={"0"}
              />
              {product?.reviews && (
                <span className={styles.reviews_count}>
                  ({product?.reviews})
                </span>
              )}
            </div>
          </div>
          <div className="d-flex align-items-center">
            {product?.oldPrice && (
              <span className={`me-3 ${styles.old_price}`}>
                ${product?.oldPrice?.toFixed(2)}
              </span>
            )}
            <span
              className={`${styles.product_price} ${
                product?.discount && styles.discounted
              }`}
            >
              ${product?.price?.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <button className={styles.add_to_cart_btn}>add to cart</button>
          <button className={`${styles.add_to_wishlist_btn} d-none d-sm-block`}>
            <RiHeart3Line />
          </button>
        </div>
      </div>
    </div>
  );
}
