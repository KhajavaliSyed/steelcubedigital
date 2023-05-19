import React from 'react';
import SEO from '../common/seo';
import HomeThree from '../components/homes/home-3';
import Wrapper from "../layout/wrapper"
import HomeOne from '../components/homes/home';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"SteelCube Digital"} />
            <HomeOne />
        </Wrapper>
    );
};

export default index;