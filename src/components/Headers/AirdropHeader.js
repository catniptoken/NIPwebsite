/*eslint-disable*/
import React from "react";
import Web3 from 'web3'

// reactstrap components
import { Container, Button } from "reactstrap";
import { Scrollbars } from 'react-custom-scrollbars';


const { abi } = require('../../contractSpecific/ContractInfo.json');        // CHANGEIT - Update the ContractInfo.json with the new stuff
import detectEthereumProvider from '@metamask/detect-provider';



// core components


const addressOfCatNIPcontract = '0x9E6aaFc12d61B2e643BcfEfCC68E75dA6E22e727';   // CHANGEIT - make sure it has the right CA




async function claimAirdropButtonClicked() {
  await ConnectToContractWithAcct(true);
}

async function ConnectToCatNIP() {
  await ConnectToContractWithAcct(false);
}



async function checkIsAirDropEnabled(web3, accountFromMetamask, doClaim) {

  var contractOfCatNIP = new web3.eth.Contract(abi, addressOfCatNIPcontract);
  // console.log("contractOfCatNIP", contractOfCatNIP);

  try {

    var nameOfToken = await contractOfCatNIP.methods.name().call();
    // console.log("nameOfToken", nameOfToken);

    var airDropTokensTotalForAccount = await contractOfCatNIP.methods.airDropTokensTotal(accountFromMetamask).call();
    console.log("airDropTokensTotalForAccount", airDropTokensTotalForAccount);

    var stringBuildForAirdropAmount = "You currently have " + airDropTokensTotalForAccount + " NIP to claim."
    if (airDropTokensTotalForAccount == 0) {
      stringBuildForAirdropAmount = "You have no Airdrop or the System has not been initialized yet."
    }

    document.getElementById("airdropHeaderCheck").innerHTML = stringBuildForAirdropAmount;

    if (doClaim) {
      if (airDropTokensTotalForAccount == 0) {


        try {

          await contractOfCatNIP.methods.airDropClaim()
            .send({
              from: accountFromMetamask
            })
            .once('receipt', (receipt) => {
              var amountOfAirDropLeft = 10;
              stringBuildForAirdropAmount = "You have claimed your airdrop! For now, you now have " + amountOfAirDropLeft + " NIP to claim."
              document.getElementById("airdropHeaderCheck").innerHTML = stringBuildForAirdropAmount;
            })

        }
        catch {
          stringBuildForAirdropAmount = "The transaction failed by canceling, or you had no airdrop. <br/> Please see your transaction logs."
          document.getElementById("airdropHeaderCheck").innerHTML = stringBuildForAirdropAmount;

        }
      }
    }

  }
  catch {
    document.getElementById("airdropHeaderCheck").innerHTML = "Wrong Network Connected!!!! <br/> Please change to Rinkeby For Testing!";  // CHANGEIT - change to BSC
  }


}







async function ConnectToContractWithAcct(doClaim) {

  if (typeof window.ethereum !== 'undefined') {
    console.log('ethereum detected!');
    const provider = await detectEthereumProvider();
    if (provider) {
      console.log('MetaMask Detected');

      const web3 = new Web3(provider);
      const accountsFromWeb3Check = await web3.eth.getAccounts();
      if (accountsFromWeb3Check.length == '0') {
        console.log("User is not logged in to MetaMask");
        var accountsFromMetaMask = 'undefined';
        try {
          accountsFromMetaMask = await window.ethereum.request({ method: 'eth_requestAccounts' });
        }
        catch {
          console.log("user rejected connecting with metamask");
        }

        if (accountsFromMetaMask === 'undefined') {
          console.log("no accounts, so don't do anything");
        }
        else {
          console.log("accountsFromMetaMask[0]", accountsFromMetaMask[0]);
          checkIsAirDropEnabled(web3, accountsFromMetaMask[0], doClaim);
        }
      }
      else {
        console.log("User is logged in to MetaMask");
        accountsFromMetaMask = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("accountsFromMetaMask[0]", accountsFromMetaMask[0]);
        checkIsAirDropEnabled(web3, accountsFromMetaMask[0], doClaim);
      }
    }
    else {
      console.log('Please install MetaMask!');
    }
  }
}


function AirdropHeader() {

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
  }
  );



  function connectButtonClicked(e) {
    e.preventDefault();
    console.log('You clicked connect.');
    ConnectToCatNIP();
  }


  return (

    <>
      <div className="page-header clear-filter" filter-color="yellow" id="airdropHeaderSectionID">
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
              src={require("newAssets/lepurrchaun.png").default}
            ></img>
            <h1 className="h1-seo">CatNIP Airdrop</h1>

            <h3 id="airdropHeaderCheck"
                style={{
                  padding: "15px 0px"
                }}
              >Do you have an airdrop? Click "Connect to CatNIP" to see!</h3>


            




            <div
              style={{

                // overflowY: "scroll",
                // maxHeight: "550px",
                margin: "0 auto",
                textAlign:"center",
                alignContent:"center",
                maxWidth: "90%",
                background: "rgba(0, 0, 0, 0.1)",
                // scrollbarWidth: "none",
                borderRadius: "30px",
                padding: "50px", //very insane cannot escape this


              }}
            >


              


              <div
                style={{
                  // maxWidth: "50%",
                  marginRight:"10px",
                }}
              >


                <div
                style={{
                  // display:"inline-block",
                }}>


                  <h3 id="airdropTotalAmountText" style={{
                    padding: "5px 0px",
                    textAlign:"right",
                    display:"inline-block",
                    width:"340px",
                    marginRight:"20%",
                  }}
                  >Total Airdrop Amount:</h3>

                  <h3 id="airdropTotalAmountValue" style={{
                    display: "inline-block",
                    textAlign:"left",
                    width:"50px",
                    marginRight:"10%",
                  }}
                  >1000</h3>


                </div>

                <div>


                  <h3 id="airdropLeftToClaimText"
                    style={{
                      padding: "5px 0px",
                    textAlign:"right",
                    display:"inline-block",
                    width:"340px",
                    marginRight:"20%",

                    }}
                  >Airdrop Left to Claim:</h3>

                  <h3 id="airdropLeftToClaimValue"
                    style={{
                      display: "inline-block",
                      textAlign:"left",
                    width:"50px",
                    marginRight:"10%",

                    }}
                  >700</h3>

                </div>


                <div>

                  <h3 id="airdropAvailableToClaimText" style={{
                    padding: "5px 0px",
                    textAlign:"right",
                    display:"inline-block",
                    width:"340px",
                    marginRight:"20%",
                  }}
                  >Airdrop Available to Claim: </h3>

                  <h3 id="airdropAvailableToClaimValue"
                    style={{
                      display: "inline-block",
                      textAlign:"left",
                      width:"50px",
                      marginRight:"10%",
                    }}
                  >0</h3>

                </div>

              </div>


              



            </div>



            <Button color="#fbed24" size="lg" className="btn-round" onClick={connectButtonClicked}
              style={{
                marginTop: "0",
                fontSize: "2em",
                backgroundColor: '#fbed24',
                color: '#00a99e',
                fontWeight: 'bold',
                padding: "15px 0px",
                marginRight: "5%",
                marginTop: "5%",
              }}
            >
              <img
                style={{
                  maxWidth: "13%",
                  maxHeight: "13%",
                }}
                src={require("newAssets/leafTeal.png").default}
              ></img>
              &nbsp;
              Connect to CatNIP


            </Button>

            <Button color="#fbed24" size="lg" className="btn-round" onClick={claimAirdropButtonClicked}
              style={{
                marginTop: "0",
                fontSize: "2em",
                backgroundColor: '#fbed24',
                color: '#00a99e',
                fontWeight: 'bold',
                padding: "15px 0px",
                marginTop: "5%",
              }}
            >
              <img
                style={{
                  maxWidth: "15%",
                  maxHeight: "15%",
                }}
                src={require("newAssets/leafTeal.png").default}
              ></img>
              &nbsp;
              Claim Airdrop


            </Button>


            <h3 id="airdropResponseMessage"
                style={{
                  padding: "15px 0px"
                }}
              >Check back next week for more Airdrop to Claim!</h3>







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

export default AirdropHeader;
