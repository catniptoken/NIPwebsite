/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";
// core components





function BuyHeader() {
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

  function buyButtonClicked(e) {
    e.preventDefault();
    console.log('You clicked buy.');
  }

  return (
    <>
      <div className="page-header clear-filter" filter-color="yellow" id="buyHeaderSectionID">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("newAssets/websitebackground.png").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand"
          style={{
            marginTop: "5rem"
          }}
          >
            <img
            resizeMode={"cover"}
              style={{

                maxWidth: "50%",


              }}
              
              alt="..."
              className="n-logo"
              src={require("newAssets/pancake_flip.png").default}
            ></img>
            <h3 className="h3-seo"
            style={{

              fontSize:"3em"


            }}
            
            >Coming soon to PancakeSwap!</h3>

            

            <Button color="#fbed24" size="lg" className="btn-round" onClick={buyButtonClicked}
            style={{

              fontSize:"2em",
              backgroundColor: '#fbed24',
              color:'#00a99e',
              fontWeight: 'bold',
              padding:"15px 0px"
              

            }}
            >

            <img
            style={{

              maxWidth: "15%",
              maxHeight: "15%",


            }}


              
              src={require("newAssets/pcsLogo.png").default}
            ></img>
            &nbsp;
            Buy Now


            </Button>
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

export default BuyHeader;
