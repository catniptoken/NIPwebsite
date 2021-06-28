import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

// pages for this kit
import Index from "views/Index.js";
import GamePage from "views/game/GamePage.js";
import InfoPage from "views/main/InfoPage.js";
import BuyPage from "views/main/BuyPage.js";
import AirdropPage from "views/main/AirdropPage.js";
import SocialsPage from "views/main/SocialsPage.js";
import TeamPage from "views/main/TeamPage.js";



import FailureSamplePage from './pdfs/Audits/CatNIPAuditFailureSample.js';
import FailureSamplePDF from './pdfs/Audits/CatNIPAuditFailureSample.pdf';


import WhitepaperPage from './pdfs/Whitepaper/CatNIPWhitePaper.js';
import WhitepaperPDF from './pdfs/Whitepaper/CatNIPWhitePaper.pdf';

ReactDOM.render(
  <BrowserRouter>

    <Switch>

    <Route
        exact path="/auditSampleFailure"
      >

        <FailureSamplePage pdf={FailureSamplePDF}/>

      </Route>


      <Route
        exact path="/whitepaper"
      >

        <WhitepaperPage pdf={WhitepaperPDF}/>

      </Route>

    

      <Route
        exact path="/game"
      >
        <GamePage />
      </Route>

      <Route
        exact path="/info"
      >
        <InfoPage />
      </Route>

      <Route
        exact path="/buy"
      >
        <BuyPage />
      </Route>

      <Route
        exact path="/airdrop"
      >
        <AirdropPage />
      </Route>

      <Route
        exact path="/socials"
      >
        <SocialsPage />
      </Route>


      <Route
        exact path="/team"
      >
        <TeamPage />
      </Route>

      <Route
        exact path=""
      >
        <Index />

      </Route>


    </Switch>



  </BrowserRouter>,

  document.getElementById("root")
);
