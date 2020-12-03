import React, { useState } from "react";
import { Button, Avatar, Badge, Image } from "antd";

import "./TopNavbar.scss";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
function TopNavbar({ toggle, collapsed, user }) {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState(false);

  const toggleLang = () => {
    lang ? i18n.changeLanguage("ru") : i18n.changeLanguage("uz");
    setLang(!lang);
  };

  return (
    <div className="top-navbar-section">
      {" "}
      <Button onClick={toggle}>
        {" "}
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}{" "}
      </Button>{" "}
      <div className="d-flex">
        <Button
          onClick={toggleLang}
          style={{ marginRight: "15px", textTransform: "uppercase" }}
        >
          {i18n.language === "uz" ? "ru" : "uz"}
        </Button>

        <p className="font-weight-bold mx-2">
          {" "}
          {!user || !user.user ? null : user.user.username}{" "}
        </p>

        <Badge count={1}>
          <Avatar
            size={40}
            src={<Image src={!user || !user.user ? null : user.user.image} />}
          />
        </Badge>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, null)(TopNavbar);
