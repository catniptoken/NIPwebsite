/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { nodeModuleNameResolver } from "typescript";
import { Scrollbars } from 'react-custom-scrollbars';
// core components

function TeamHeader() {
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
      <div className="page-header clear-filter" filter-color="yellow" id="teamHeaderSectionID">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("newAssets/websitebackgroundBW.png").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>

          <div className="content-center brand">
            <h1 style={{
                paddingTop:"200px"


              }}className="h1-seo">The CatNIP Team!</h1>

            <div
            style={{
              border:"5px",
              borderStyle:"solid",
              borderColor:"rgba(255, 255, 255, 0.50)",
              height: 660,
              overflowX:"hidden !important",
              // borderRadius: "30px",
              // scrollbarWidth: "none",
              // background: "rgba(0, 0, 0, 0.1)",
            }}
            > 

            <Scrollbars
              renderThumbVertical={({ style, ...props }) =>
                <div {...props} style={{ ...style, 
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                  
              }} />
              }
              style={{
                height: 650,
                overflowX:"hidden !important",
                // borderRadius: "30px",
                // scrollbarWidth: "none",
                // background: "rgba(0, 0, 0, 0.1)",
              }}
            >


              <div
                style={{
                  // overflowX:"hidden",

                  // overflowY: "scroll",
                  // maxHeight: "550px",
                  // background: "rgba(0, 0, 0, 0.1)",
                  
                  // borderRadius: "30px",
                  padding: "00px", //very insane cannot escape this


                }}
              >

                


            <div
              style={{
                display: "inline",


              }}

            >

              <div
                style={{
                  display: "inline-block",
                  margin: "10px"
                }}
              >
                <img
                style={{
                  marginBottom:"0"
                }}
                  alt="..."
                  className="n-logo"
                  src={require("newAssets/founder_nikolai.png").default}
                ></img>
                <div
                style={{
                  fontSize:"2em"
                }}
                >
                  Nikolai
                </div>
                <div>
                  Nikolai is the founder and lead game <br />  developer of the CatNIP project.
                </div>
              </div>



            </div>



            <div
              style={{
                display: "inline-block",
                margin: "10px"
              }}
            >
              <img
              style={{
                marginBottom:"0"
              }}
                alt="..."
                className="n-logo"
                src={require("newAssets/founder_coffeecat.png").default}
              ></img>
              <div
                style={{
                  fontSize:"2em"
                }}
                >
                  Cat
                </div>
                <div>
                  Cat is the founder and lead <br />  manager of the CatNIP project.
                </div>
            </div>

            <div
              style={{
                display: "inline-block",
                margin: "10px"
              }}
            >
              <img
              style={{
                marginBottom:"0"
              }}
                alt="..."
                className="n-logo"
                src={require("newAssets/founder_yoshiko.png").default}
              ></img>
              <div
                style={{
                  fontSize:"2em"
                }}
                >
                  Yoshiko
                </div>
                <div>
                  Yoshiko is the lead solidity smart <br />   contract developer of CatNIP.
                </div>
            </div>

            

            <div
              style={{
                display: "inline",


              }}

            >

              <div
                style={{
                  display: "inline-block",
                  margin: "10px"
                }}
              >
                <img
                style={{
                  marginBottom:"0"
                }}
                  alt="..."
                  className="n-logo"
                  src={require("newAssets/founder_raymond.png").default}
                ></img>
                <div
                style={{
                  fontSize:"2em"
                }}
                >
                  Raymond
                </div>
                <div>
                  Raymond is a game artist  <br />   of the CatNIP project.
                </div>
              </div>



            </div>



            <div
              style={{
                display: "inline-block",
                margin: "10px",
                marginLeft:"30px",
                  marginRight:"30px",
              }}
            >
              <img
              style={{
                marginBottom:"0",
                
              }}
                alt="..."
                className="n-logo"
                src={require("newAssets/founder_sint.png").default}
              ></img>
              <div
                style={{
                  fontSize:"2em",
                  

                }}
                >
                  Sint
                </div>
                <div>
                  Sint is a game developer <br />  of the CatNIP project.
                </div>
            </div>

            <div
              style={{
                display: "inline-block",
                margin: "10px",



              }}
            >
              <img
              style={{
                marginBottom:"0",
                

              }}
                alt="..."
                className="n-logo"
                src={require("newAssets/founder_alchymyst.png").default}
              ></img>
              <div
                style={{
                  fontSize:"2em"
                }}
                >
                  Alchymyst
                </div>
                <div>
                  Alchymyst is a game artist <br />  powered by Coffee and Memes.
                </div>
            </div>





                

                




              </div>
            </Scrollbars>

            </div>


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

export default TeamHeader;
