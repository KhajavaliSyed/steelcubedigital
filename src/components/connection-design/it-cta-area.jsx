import CallToActionForm from '@/src/forms/call-to-action-form';
import React from 'react';


const it_cta_content = {
    title: "Any project on your mind. Let us know.",
    des: <>Experience the power of digital marketing with Steelcube Digital. Let's embark on a journey to transform your business and achieve remarkable results together.</>
}
const {title, des}  = it_cta_content



const ItCtaArea = () => {
    return (
        <>
        <div className="it-cta-area law-cta-area about-me-cta-area pt-120 pb-85 theme-bg"
         style={{backgroundImage: `url(/assets/img/cta/sv-detials-cta-bg.png)`}}
         >
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-6" >
                  <div className="mb-30">
                     <div className="it-cta__title wow tpfadeUp">
                        <div className="section-title-wraper">
                           <div className="tp-section">
                              <div className="pb-40"><img src="/assets/img/icons/red-what-icon.png" alt="" /></div>
                              <h2 className="tp-section__title text-black text-capitalize mb-25">{title}</h2>
                              <p className="pr-45">{des}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6" >
                  <div className="it-cta-form about-cta-form wow tpfadeUp">
                    <CallToActionForm style_sv_details={true} />
                    
                  </div>
               </div>
            </div>
         </div>
      </div>
            
        </>
    );
};

export default ItCtaArea;