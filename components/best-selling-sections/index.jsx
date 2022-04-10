import React from "react";
import Card from "../card";
import CtaBtn from "../cta_btn";
export default function BestSellingSection({ products, setLimit, limit, end }) {
  return (
    <section className="pt-5 py-3">
      <div className="container pt-md-3">
        <h1 className="sec_heading">
          <span>BEST SELLING</span>
        </h1>
        <div className="row py-3">
          {products.map((product) => (
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
