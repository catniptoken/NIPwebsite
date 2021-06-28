/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function GameHeader() {
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
      <div className="page-header clear-filter" filter-color="yellow" id="gameHeaderSectionID">
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
            <img
              alt="..."
              className="n-logo"
              src={require("newAssets/catnipbattlerlogo.png").default}
            ></img>
            <h1 className="h1-seo">Game Page!</h1>
            <h3>This will be the page to host the game.</h3>
          </div>

        </Container>

        <footer className="footer">
          <Container>
            <nav> <ul><li><a>CatNIP © 2021</a></li></ul></nav>
            <div className="copyright" id="copyright">
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

export default GameHeader;
