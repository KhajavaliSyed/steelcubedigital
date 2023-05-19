//import service_data from '@/src/data/service-data';
import React from 'react';


const service_content = {
    sircle_img: "/assets/img/services/icon/service-page-cirlce-logo.png",
    avatas_img: "/assets/img/services/service-avatas.png",
    title: "Here are some of the rewards from putting our customers first."
}

// service_data
const service_data = [
   {
     id: 1,
     counter: "01",
     title: <> Social Media Management </> ,
     des:  <>We expertly manage your social media platforms, curating engaging content, 
     fostering meaningful interactions, and growing your online community.</>,
     delay: ".4s",
     list_item: [
       "Harnessing the power of social media",
       "Fostering audience interaction",
       "Tracking social media performance"
     ],
   },
   {
     id: 2,
     counter: "02",
     title: <> Content Creation and Marketing </> ,
     des: <>Our skilled team develops compelling and valuable content that resonates 
     with your target audience, driving brand awareness, engagement and conversions.</> ,
     delay: ".5s",
     list_item: [
       "Identifying relevant platforms",
       "Creating shareable content",
       "Measuring impact on brand awareness"
     ],
   },
   {
     id: 3,
     counter: "03",
     title:  <> Search Engine Optimization </> ,
     des:  <>We optimize your website and content to improve organic search rankings, 
     increase visibility, and attract targeted traffic to your online presence.</>,
     delay: ".5s",
     list_item: [
       "Keyword Research and Optimization",
       "Technical SEO Audit and Optimization",
       "Link Building and Off-Page Optimization"
     ],
   },
   {
      id: 4,
      counter: "04",
      title:  <> Paid Advertising (PPC) </> ,
      des:  <>Using strategic targeting and compelling ad creatives, we run effective paid advertising campaigns to drive 
      qualified traffic and maximize your return on investment.</>,
      delay: ".5s",
      list_item: [
        "Targeted Advertising Campaigns",
        "Ad Copy Creation and Optimization",
        "Budget Management and ROI Tracking"
      ],
    },
    {
      id: 5,
      counter: "05",
      title:  <> Email Marketing </> ,
      des:  <>We create personalized email campaigns to nurture leads, build customer 
      loyalty, and drive conversions, utilizing automation and segmentation for optimal results.</>,
      delay: ".5s",
      list_item: [
        "Strategic Email Campaigns",
        "Automated Email Workflows",
        "Data-driven Optimization and Analytics"
      ],
    },
    {
      id: 6,
      counter: "06",
      title:  <> Influencer Marketing </> ,
      des:  <>Leveraging the power of influential voices in your industry, we collaborate with relevant 
      influencers to expand your brand's reach, credibility, and engagement.</>,
      delay: ".5s",
      list_item: [
        "Influencer Identification and Collaboration",
        "Customized Influencer Campaigns",
        "Performance Tracking and Measurement"
      ],
    },
    {
      id: 7,
      counter: "07",
      title:  <> Analytics and Reporting </> ,
      des:  <>We utilize robust analytics tools to track key performance metrics, provide comprehensive reports,
       and gain valuable insights to optimize your digital marketing strategies.</>,
      delay: ".5s",
      list_item: [
        "Uncovering Actionable Information",
        "Performance Tracking and Measuring Success",
        "Communicating Results Effectively"
      ],
    },
    {
      id: 8,
      counter: "08",
      title:  <> Website Design and Development </> ,
      des:  <>Our team builds visually appealing and user-friendly websites that align 
      with your brand identity, ensuring seamless functionality and a compelling user experience.</>,
      delay: ".5s",
      list_item: [
        "Engaging and Intuitive Interfaces",
        "Responsive and Mobile-first Approach",
        "Custom Development Solutions"
      ],
    },
    {
      id: 9,
      counter: "09",
      title:  <> Online Reputation Management </> ,
      des:  <>We monitor and manage your brand's online reputation, proactively addressing any negative feedback, 
      and enhancing positive sentiment across digital platforms.</>,
      delay: ".5s",
      list_item: [
        "Brand Monitoring and Protection",
        "Reputation Repair and Crisis Management",
        "Proactive Online Reputation Building"
      ],
    },
    {
      id: 10,
      counter: "10",
      title:  <> Conversion Rate Optimization (CRO) </> ,
      des:  <>We analyze user behavior, conduct A/B testing, and implement data-driven strategies to optimize your website's 
      conversion rates, maximizing lead generation and sales.</>,
      delay: ".5s",
      list_item: [
        "Data-driven Conversion Analysis",
        "Optimizing User Journey",
        "Persuasive Design and Call-to-Action Optimization"
      ],
    },
 ];
 
const {sircle_img, avatas_img, title}  = service_content
const ServiceArea = () => {
    return (
        <>
            <div className="tp-bs-service pt-120 pb-80">
         <div className="container">
            {/* <div className="row">
               <div className="col-12">
                  <div className="sv-cicle-logo-wraper text-center mb-25 wow tpfadeUp" data-wow-delay=".2s">
                        <img src={sircle_img} alt="them-pure" />
                  </div>
               </div>
            </div> */}
            <div className="tp-bs-service pb-55 tp-border-bottom pt-35">
               {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
                    {service_data.slice(17, 22).map((item, i) =>
                        <div key={i} className="col">
                     <div className="tp-bs-service-box text-center pt-40 pb-40 mb-25 wow tpfadeIn" data-wow-delay=".2s">
                        <div className="tp-bs-sv-icon mb-25">
                           <img src={item.img} alt="them-pure" />
                        </div>
                        <h3 className="tp-bs-sv-title">
                           <a href="#"> {item.title}</a>
                        </h3>
                     </div>
                  </div>
                        )
                    }
               </div> */}
               <div className="row">
                  {service_data.map((item, i) => (
                  <div key={i} className="col-xl-6 col-lg-6">
                     <div
                        className="da-service pr-30 pl-30 mb-30 wow tpfadeUp"
                        data-wow-delay=".4s"
                     >
                        <div className="d-flex justify-content-between align-items-center mb-15">
                        <h3 className="da-service__title ">{item.title}</h3>
                        <div className="da-service__counter">{item.counter}</div>
                        </div>
                        <div className="da-service__list-box white-bg">
                        <p>{item.des}</p>
                        <ul>
                           {item.list_item.map((list, i) => (
                              <li key={i}>
                              {list}
                              <span>
                                 <i className="fal fa-check"></i>
                              </span>
                              </li>
                           ))}
                        </ul>
                        </div>
                     </div>
                  </div>
                  ))}
               </div>
            </div>

            <div className="tp-bs-service-review text-center pt-40 pb-40 wow tpfadeUp" data-wow-delay=".3s">
               <div className="tp-bs-sv-avata d-lg-inline-block pr-25">
                  <img src={avatas_img} alt="them-pure" />
               </div>
               <p className="d-inline-block pr-5">{title}</p>
               <a href="/contact">Make Request <span><i className="fal fa-long-arrow-right"></i></span></a>
            </div>
         </div>
      </div>
        </>
    );
};

export default ServiceArea;