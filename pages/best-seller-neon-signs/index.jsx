import React from "react";
import Breadcrumb from "../../components/breadcrumb";
import Card from "../../components/card";
import CtaBtn from "../../components/cta_btn";
import readJsonData from "../../utils/readJsonData";
import { useState } from "react";

export default function BestSellerPage({ products }) {
  const [end] = useState(products?.length);
  const [limit, setLimit] = useState(16);

  const paginateProducts = (products, limit) => {
    return products.slice(0, limit);
  };
  return (
    <section className="best_seller_page">
      <div className="container">
        <h1 className="page_heading">BEST SELLER</h1>
        <Breadcrumb current={"Best Seller"} />
        <div className="row py-3">
          {paginateProducts(products, limit).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <div className="row pt-3">
          <div className="d-flex justify-content-center">
            {end > limit && (
              <CtaBtn
                func={() => setLimit(limit + 4)}
                button
                label={end <= limit ? "no more" : "show more"}
                disabled={end <= limit}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const products = readJsonData("products");
  return {
    props: { products },
  };
}
