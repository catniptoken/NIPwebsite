import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import SocialsNavbar from "components/Navbars/SocialsNavbar.js";
import SocialsHeader from "components/Headers/SocialsHeader.js";




function SocialsPage() {
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
      <SocialsNavbar />
      <div className="wrapper">
        <SocialsHeader />
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

export default SocialsPage;
