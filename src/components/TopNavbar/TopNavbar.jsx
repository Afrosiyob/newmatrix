import React, { useState } from "react";
import { Button, Avatar, Badge, Image } from "antd";

import "./TopNavbar.scss";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
function TopNavbar({ toggle, collapsed }) {
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
      <div>
        <Button
          onClick={toggleLang}
          style={{ marginRight: "15px", textTransform: "uppercase" }}
        >
          {i18n.language === "uz" ? "ru" : "uz"}
        </Button>

        <Badge count={1}>
          <Avatar
            size={40}
            src={
              <Image src="https://avatars2.githubusercontent.com/u/45900728?s=460&u=ecf18e8e6d8dc738e132acbc29fbc187cbfdf6fe&v=4" />
            }
          />
        </Badge>
      </div>
    </div>
  );
}

export default TopNavbar;
