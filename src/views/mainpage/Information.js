import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

import "newCSS/Information.css";

// core components


// import WhitepaperPDF from '../documents/TheORBWhitepaper.pdf';

const whitepaperButtonClicked = () => {

}

function NucleoIcons() {
  return (
    <>
      <div className="InfoSection" id="informationSectionID">
        <Container>
          <Row className="justify-content-md-center">

              <h1 className="titleForInformation">Information & Whitepaper</h1>



          </Row>

          <Row className="justify-content-md-center">

          <Button 
              className="btn-round" 
              color="info" 
              type="button"
              style={{ fontWeight: 'bold',
              fontSize: '1rem'
            
            }}
              size="lg"
              onClick={whitepaperButtonClicked}
              >
                <i className="now-ui-icons files_paper"></i>
                Download the CatNIP Whitepaper!
              </Button>



              



          </Row>

          <Row className="justify-content-md-center">

          <h5 className="informationText">
          NIP is the base cryptocurrency of a decentralized ecosystem on the Binance Smart Chain. 
            <br/>
            <br/>
NIP has tokenomic protocols employed to boost the value and liquidity of the token. Each transaction of NIP takes a 5% tax to further the value of NIP. CatNIP has a permanent supply with no burning and no minting. There is no Staking or Farming mechanism which allows for more NIP to be created.
<br/>
<br/>
The NIP Smart Contract is governed by a Proxy, which is governed by a 48 hour Time Lock, which is governed by a Multisig Gnosis Safe. In short, by using these multiple safety mechanisms, the project code can be upgraded, but in a rug-proof manner. NIP is not intended to be a short-term release; this is a long-term project that will have many updates going years in the future.
<br/>
<br/>
NIP will be used for minting many types of NFTs. Each NFT will have different mechanics depending on where the NIP consumed goes. NIP will be used for minting game-based NFTs.
<br/>
<br/>
The CatNIP games will be of a variety of genres that allow users to play and interact with these NFTs. The premier CatNIP game will be a ‘Cat Battler’ game. When NIP is used to purchase an NFT for a game, a percentage of the NIP received goes back to the holders of NIP and to the team.
<br/>
<br/>
NIP will be used for minting charity-based NFTs. All of the NIP consumed in this manner will be sold to raise funds for specific charities. All proceeds are donated to those charities. The NFT will be used for cosmetic purposes.
<br/>
<br/>
In the future, using NIP to consume NFTs will serve a wide variety of purposes such as audit insurance, crypto ETFs, cryptocurrency skill certifications, a NIP NFT marketplace, bridging to other DeFi networks, DeFi partnerships, and more. In the far future, NIP will also attempt to provide a subjective oracle system using a court system.
<br/>
<br/>
As the NIP project continues, new ideas will be considered and implemented. NIP is backed by an experienced management and development team that is always considering different cryptocurrency projects that can be created with NIP as the core currency. 

              </h5>

          </Row>


          

        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
