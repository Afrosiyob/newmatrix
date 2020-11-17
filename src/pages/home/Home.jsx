import Axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import HomeAbout from "../../layouts/home/HomeAbout/HomeAbout";
import HomeFooter from "../../layouts/home/HomeFooter/HomeFooter";
import HomeHeader from "../../layouts/home/HomeHeader/HomeHeader";
import HomeNavbar from "../../layouts/home/HomeNavbar/HomeNavbar";
import HomePdf from "../../layouts/home/HomePdf/HomePdf";
import HomeReg from "../../layouts/home/HomeReg/HomeReg";

import "./Home.scss";

function Home(props) {
  const { id, token } = useParams();

  console.log("====================================");
  console.log("id = " + id);
  console.log("====================================");
  console.log("token = " + token);
  console.log("====================================");

  useEffect(() => {
    const formData = new FormData();

    formData.append("id", id);
    formData.append("token", token);

    Axios.post("http://0354238911ac.ngrok.io/api/activate/", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
