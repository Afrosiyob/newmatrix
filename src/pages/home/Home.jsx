import React from "react";
import HomeAbout from "../../layouts/home/HomeAbout/HomeAbout";
import HomeFooter from "../../layouts/home/HomeFooter/HomeFooter";
import HomeHeader from "../../layouts/home/HomeHeader/HomeHeader";
import HomeNavbar from "../../layouts/home/HomeNavbar/HomeNavbar";
import HomePdf from "../../layouts/home/HomePdf/HomePdf";
import HomeReg from "../../layouts/home/HomeReg/HomeReg";

import "./Home.scss";

function Home() {
  return (
    <div className="home-main-page">
      <HomeNavbar />
      <HomeHeader />
      <main>
        <HomeAbout />
        <HomePdf />
        <HomeReg />
      </main>
      <HomeFooter />
    </div>
  );
}

export default Home;
