import Axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import HomeAbout from "../../layouts/home/HomeAbout/HomeAbout";
import HomeFooter from "../../layouts/home/HomeFooter/HomeFooter";
import HomeHeader from "../../layouts/home/HomeHeader/HomeHeader";
import HomeNavbar from "../../layouts/home/HomeNavbar/HomeNavbar";
import HomePdf from "../../layouts/home/HomePdf/HomePdf";
import HomeReg from "../../layouts/home/HomeReg/HomeReg";
import { ToastContainer, toast } from "react-toastify";
import "./Home.scss";

function Home(props) {
  const { id, token } = useParams();

  const notify = () =>
    toast.success(" Siz ro'yxatdan o'tdingiz !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notifyWaring = () =>
    toast.warn(" Bu foydalanuvchi ro'yxatdan o'tgan ! ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    const formData = new FormData();

    formData.append("id", id);
    formData.append("token", token);

    Axios.post("http://b7d71dee69c7.ngrok.io/api/activate/", formData)
      .then((res) => {
        console.log(res);
        notify();
      })
      .catch((err) => {
        // console.log(err.response.data);
        notifyWaring();
      });
  }, []);

  return (
    <div className="home-main-page">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
