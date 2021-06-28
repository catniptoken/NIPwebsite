import React from "react";
import { Container } from "reactstrap";
// reactstrap components
// import {
// } from "reactstrap";

// core components
import GameNavbar from "components/Navbars/GameNavbar.js";
import GameHeader from "components/Headers/GameHeader.js";




function GamePage() {
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
      <GameNavbar />
      <div className="wrapper">
        <GameHeader />
        
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

export default GamePage;
