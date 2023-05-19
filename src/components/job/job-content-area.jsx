import Link from 'next/link';
import React from 'react';


const job_content  = {
    img: "/assets/img/job/job-cirile-logo.png",
    title: "Steelcube is hiring",
    description: <>At Steelcube Digital, we believe that our success is driven by the talented 
    individuals who make up our team. We are always on the lookout for passionate, 
    creative, and driven professionals to join us on our journey to transform the digital landscape. 
    When you join Steelcube Digital, you become part of a collaborative and dynamic work environment 
    where your ideas are valued and your contributions make a real impact. We offer exciting opportunities 
    for growth, professional development, and the chance to work with diverse clients across various 
    industries. If you're ready to take your career to new heights and be part of a team that is shaping 
    the future of digital marketing, we invite you to explore our current job openings and join us in our
     mission to empower businesses with data-driven strategies and exceptional creativity.
    </>,
    btn_text : "apply now",
}

const {img, title, description, btn_text} = job_content


const JobContentArea = () => {
    return (
        <>
            <div className="job-about-area pt-120 pb-120">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  {/* <div className="job-about-cicle-img text-center mb-60">
                     <img src={img} alt="" />
                  </div> */}
                  <div className="section-title-wraper text-center wow tpfadeUp">
                     <div className="tp-section">
                        <h2 className="tp-section__title mb-30">{title}</h2>
                        <p>{description}</p>
                     </div>
                  </div>
                  {/* <div className="job-btn-wrapper text-center">
                     <Link href="/job-details" className="tp-btn wow tpfadeUp">
                        {btn_text}
                        <span>
                           <i className="fal fa-long-arrow-right"></i>
                           <i className="fal fa-long-arrow-right"></i>
                        </span>
                     </Link>
                  </div> */}
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default JobContentArea;