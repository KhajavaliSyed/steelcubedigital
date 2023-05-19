import Link from 'next/link';
import React from 'react';


const about_content_2  ={
    img: "/assets/img/about/ab-about-img.jpg",
    title: <>Empowering Your Success with SteelCube</>,
    description: <>At Steelcube Digital, we are a dynamic and innovative digital marketing agency 
    dedicated to making your digital experience brighter. With a passion for creativity and a 
    data-driven approach, we empower businesses to thrive in the digital landscape.
    <br /> 
                <br />
                Our expert team of digital marketing professionals brings a wealth of knowledge and experience across 
                various disciplines, including SEO, paid advertising, social media marketing, content creation, and more. 
                We understand that each business is unique, and that's why we tailor our strategies 
                to suit your specific needs and goals.
                
                </>
}
const {img, title, description}  = about_content_2


const AboutPageAbout = () => {
    return (
      <>
        <div className="about-page-about pt-120 pb-90">
          <div className="container">
            <div className="row align-items-md-center">
              <div className="col-xl-6 wow tpfadeUp">
                <div className="about-page-about-img mb-30">
                  <img src={img} alt={title} />
                </div>
              </div>
              <div className="col-xl-6 wow tpfadeUp">
                <div className="about-page-ab">
                  <div className="section-title-wraper">
                    <div className="tp-section">
                      <h2 className="tp-section__title mb-30">{title}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="about-page-ab-btn-wrapper mb-30 wow tpfadeUp">
                    <Link href="/service" className="tp-btn">
                      Our Services
                      <span>
                        <i className="fal fa-long-arrow-right"></i>
                        <i className="fal fa-long-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default AboutPageAbout;