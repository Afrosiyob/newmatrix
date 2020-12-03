import React from "react";
// import { useParams } from "react-router-dom";
import HomeAbout from "../../layouts/home/HomeAbout/HomeAbout";
import HomeFooter from "../../layouts/home/HomeFooter/HomeFooter";
import HomeHeader from "../../layouts/home/HomeHeader/HomeHeader";
import HomeNavbar from "../../layouts/home/HomeNavbar/HomeNavbar";
import HomePdf from "../../layouts/home/HomePdf/HomePdf";
import HomeReg from "../../layouts/home/HomeReg/HomeReg";
import { ToastContainer } from "react-toastify";

import { connect } from "react-redux";
import TitleHamlet from "../../components/TitleHamlet/TitleHamlet";
import "./Home.scss";

function Home(props) {
  // const { id, token } = useParams();

  // const notify = () =>
  //   toast.success(" Siz ro'yxatdan o'tdingiz !", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // const notifyWaring = () =>
  //   toast.warn(" Bu foydalanuvchi ro'yxatdan o'tgan ! ", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });

  // useEffect(() => {
  //   const formData = new FormData();

  //   formData.append("id", id);
  //   formData.append("token", token);

  //   Axios.post("http://eb35d6d34069.ngrok.io/api/activate/", formData)
  //     .then((res) => {
  //       console.log(res);
  //       notify();
  //     })
  //     .catch((err) => {
  //       // console.log(err.response.data);
  //       notifyWaring();
  //     });
  // }, []);

  return (
    <div className="home-main-page">
      <TitleHamlet title="Matrix" />
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

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, null)(Home);
