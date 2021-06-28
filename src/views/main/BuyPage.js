import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import BuyNavbar from "components/Navbars/BuyNavbar.js";
import BuyHeader from "components/Headers/BuyHeader.js";




function BuyPage() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <BuyNavbar />
      <div className="wrapper">
        <BuyHeader />
        <div className="main">
          {/* <Images /> */}
          {/* <BasicElements /> */}
          {/* <Navbars /> */}
          {/* <Tabs /> */}
          {/* <Pagination /> */}
          {/* <Notifications /> */}
          {/* <Typography /> */}
          {/* <Javascript /> */}
          {/* <Carousel /> */}
          {/* <NucleoIcons /> */}
          {/* <CompleteExamples /> */}
          {/* <SignUp /> */}
          {/* <Examples /> */}
          {/* <Download /> */}
        </div>
        {/* <DarkFooter /> */}
      </div>
    </>
  );
}

export default BuyPage;
