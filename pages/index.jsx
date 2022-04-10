import Hero from "../components/hero";
import CouponsBar from "../components/coupons-bar";
import WhyUsSection from "../components/why-us-section";
import CollectionsSection from "../components/collections-section";
import BestSellingSection from "../components/best-selling-sections";
import BrandsSection from "../components/brands-section";
import ShopSection from "../components/shop_section";
import Gallery from "../components/gallery";
import FeaturesSection from "../components/features";
import readJsonData from "../utils/readJsonData";
import { useState } from "react";

export default function Home({ products }) {
  const [end] = useState(products?.length);
  const [limit, setLimit] = useState(8);

  const paginateProducts = (products, limit) => {
    return products.slice(0, limit);
  };
  return (
    <div className="home_page_wrapper">
      <Hero />
      <CouponsBar />
      <WhyUsSection />
      <CollectionsSection />
      <BestSellingSection
        products={paginateProducts(products, limit)}
        setLimit={setLimit}
        limit={limit}
        end={end}
      />
      <BrandsSection />
      <ShopSection />
      <FeaturesSection />
      <Gallery />
    </div>
  );
}

export async function getStaticProps() {
  const products = readJsonData("products");
  return {
    props: { products },
  };
}
