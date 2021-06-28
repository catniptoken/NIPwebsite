/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-solid-svg-icons'

import "./FooterSocialIcons.css";

function SocialsHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="yellow" id="socialsHeaderSectionID"


      >
        <div
          className="page-header-image"
          style={{

            backgroundImage:
              "url(" + require("newAssets/websitebackground.png").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            
            <h1 className="h1-seo" ></h1>
            {/* <h1 class="fab fa-telegram">Check the bottom right for all of CatNIP's social links!</h1> */}
            <a href="https://t.me/Catnipchat" target="_blank" >
                <i style={{
                  fontSize: "1400%"
                }}
                  class="fab fa-telegram"></i>
              </a>

              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;

              <a href="https://twitter.com/CatnipToken" target="_blank">
                <i style={{
                  fontSize: "1400%"
                }} class="fab fa-twitter"></i>
              </a>

              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;

              <a href="https://discord.gg/wDqrC88QJW" target="_blank">
                <i style={{
                  fontSize: "1400%"
                }} class="fab fa-discord"></i>
              </a>


              

              

              
          </div>

          
          
        </Container>

        


        <footer className="footer">
          <Container>
            <nav> <ul><li><a>CatNIP © 2021</a></li></ul></nav>
            <div className="copyright" id="copyright">

            <img
          style={{
            position:"absolute",
            maxWidth:"none",
            bottom: "0",
            right: "0"

          }}
          
              alt="..."
              className="n-logo"
              src={require("newAssets/Communicat.png").default}
            ></img>
              <a href="https://t.me/Catnipchat" target="_blank" >
                <i style={{
                  fontSize: "200%"
                }}
                  class="fab fa-telegram"></i>
              </a>
              &nbsp;
              <a href="https://twitter.com/CatnipToken" target="_blank">
                <i style={{
                  fontSize: "200%"
                }} class="fab fa-twitter"></i>
              </a>
              &nbsp;
              <a href="https://discord.gg/wDqrC88QJW" target="_blank">
                <i style={{
                  fontSize: "200%"
                }} class="fab fa-discord"></i>
              </a>
              &nbsp;
            </div>
          </Container>
        </footer>


      </div>
    </>
  );
}

export default SocialsHeader;
