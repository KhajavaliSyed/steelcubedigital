import React from "react";
import SEO from "../common/seo";
import Checkout from "../components/checkout";

const index = () => {
  return (
    <>
      <SEO pageTitle={"SteelCube Digital - Checkout"} />
      <Checkout />
    </>
  );
};

export default index;
