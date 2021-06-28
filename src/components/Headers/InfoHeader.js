/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { Scrollbars } from 'react-custom-scrollbars';

import WhitePaperJS from '../../pdfs/Whitepaper/CatNIPWhitePaper.js';
import WhitePaperPDF from '../../pdfs/Whitepaper/CatNIPWhitePaper.pdf';




// core components

function InfoHeader() {
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
      <div className="page-header clear-filter" filter-color="yellow" id="infoHeaderSectionID">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("newAssets/websitebackgroundBW.png").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>

          <div className="content-center brand"
            style={{
              marginTop: "10%"
            }}
          >

            <img
              alt="..."
              className="n-logo"
              src={require("newAssets/catalyst.png").default}
            ></img>
            <h1 className="h1-seo">Information</h1>


            <Scrollbars
              renderThumbVertical={({ style, ...props }) =>
                <div {...props} style={{ ...style, backgroundColor: 'rgba(255, 255, 255, 0.75)', right: "20px", top: "20px" }} />
              }
              style={{
                height: 550,
                borderRadius: "30px",
                background: "rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{

                  // overflowY: "scroll",
                  // maxHeight: "550px",
                  // background: "rgba(0, 0, 0, 0.1)",
                  // scrollbarWidth: "none",
                  // borderRadius: "30px",
                  padding: "50px", //very insane cannot escape this


                }}
              >


                <h3 >CatNIP is a new Financial Ecosystem.
                  <br></br>
                  Please see our whitepaper <a

                    style={{
                      color: "yellow"
                    }}
                    target="_blank"
                    href="/whitepaper">here</a>

                  <br></br>



                </h3>



                <h3

                  style={{
                    textAlign: "left"
                  }}
                >
                  Total Supply: 1,000,000,000 (1 Billion) NIP
                  <br></br>
                  Public Supply: &nbsp;&nbsp;65% - 650,000,000 NIP
                  <br></br>
                  Airdrop Supply: 20% - 200,000,000 NIP
                  <br></br>
                  Team Supply: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15% - 150,000,000 NIP

                </h3>

                <h3

                  style={{
                    textAlign: "left"
                  }}
                >
                  CatNIP has a 2% Liquidity, 2% Holder, and 1% Team tax.
                  <br></br>
                  Whale Blocker - Max transfer of 1,000,000 NIP per 24 hours.
                  <br></br>
                  Bot Blocker - CatNIP uses a unique system to put an end to bot scalping.

                </h3>

                <h3

                  style={{
                    textAlign: "left"
                  }}
                >
                  CatNIP has a 100% fair launch. No presale. No private sale.
                  <br></br>
                  The NIP contract is safeguarded with a Time Lock and a Multisig.
                  <br></br>
                  The NIP contract is also updated by proxy.

                </h3>


                <h3

                  style={{
                    textAlign: "left"
                  }}
                >
                  The CatNIP Wave 1 Airdrop will only be available to those who
                  <br></br>
                  had PAW in their wallet on March 20th, 2021.
                  <br></br>
                  For more details please read the whitepaper.

                </h3>


                <h3

                  style={{
                    textAlign: "left"
                  }}
                >
                  CatNIP Battler is a cat collection and battle game.
                  <br></br>
                  Players battle their NFT cats and collect more!
                  <br></br>
                  NIP is used to mint NFTs. The marketplace is coming later.

                </h3>

                <h3

                  style={{
                    textAlign: "left"
                  }}
                >
                  Exchange listings are top priority for CatNIP.
                  <br></br>
                  CatNIP Audits are available.
                  <br></br>
                  The NIP team has very much planned. Please join Discord or Telegram for updates.

                </h3>









              </div>
            </Scrollbars>



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

export default InfoHeader;
