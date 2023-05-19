import React from "react";
import SEO from "../common/seo";
import HomeSeven from "../components/homes/home-7";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"SteelCube Digital - Law Firm"} />
      <HomeSeven />
    </Wrapper>
  );
};

export default index;
