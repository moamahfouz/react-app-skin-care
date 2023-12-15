import React from "react";

const Assessment = () => {

    const progressBarStyle = {
        background: '#363873',
        width: '8%',
        height: '10px',
    };

    return (
       <>
           <div className="text__center shadow">
               <a className="navbar-brand m-auto active" href="/">
                   <img src="/images/logo.png" width="100" />
               </a>
           </div>


           <div className="container">
               <div className="row mt-1">
                   <div className="col-12">
                       <div dir="ltr" className="text-right">
                           <p className="mb-1">
                               <span id="current"></span> / 13</p>
                           <div className="progress">
                               <div className="progress-bar" id="progressbar"
                                    style={progressBarStyle}></div>
                           </div>
                       </div>

                   </div>
               </div>

           </div>


           <div className="mt-2 container divs">

               <section>
                   <div className="text-primary text__bold text__center" id="title">
                   </div>
                   <div className="row text__center" id="answers">
                   </div>
               </section>

               <div className="controls">
                   <a className="next btn text-white bg-prime rounded">
                       <i className="fa fa-arrow-right"></i>
                   </a>
                   <a className="back btn text-white bg-prime rounded">
                      <i className="fa fa-arrow-left"></i>
                   </a>
               </div>
           </div>
       </>
    );
}

export default Assessment;