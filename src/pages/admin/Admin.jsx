import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Admin.scss";

import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  LineChartOutlined,
  TeamOutlined,
  BarcodeOutlined,
  RiseOutlined,
  DingdingOutlined,
  SettingOutlined,
} from "@ant-design/icons";
// import { useTranslation } from "react-i18next";
import SideBarLogo from "../../components/SideBarlogo/SideBarLogo";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import { Link, Route, Switch } from "react-router-dom";

import Team from "./Team/Team";
import Investment from "./Investment/investment";
import Settings from "./Settings/Settings";
import Statistics from "./Statistics/Statistics";
import Products from "./Products/Products";
import Tariflar from "./Tariflar/Tariflar";

const { Sider, Content, Footer } = Layout;

function Admin() {
  const [collapsed, setCollapsed] = useState(false);

  // const { t } = useTranslation();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const menuItem = [
    {
      icon: <HomeOutlined />,
      text: "Home",
      url: "/",
    },
    {
      icon: <LineChartOutlined />,
      text: "Statistics",
      url: "/admin",
    },
    {
      icon: <TeamOutlined />,
      text: "Team ",
      url: "/admin/team",
    },
    {
      icon: <BarcodeOutlined />,
      text: "Products",
      url: "/admin/products",
    },
    {
      icon: <RiseOutlined />,
      text: "Tariflar",
      url: "/admin/tariflar",
    },
    {
      icon: <DingdingOutlined />,
      text: "My investment",
      url: "/admin/investment",
    },
    {
      icon: <SettingOutlined />,
      text: "Settings",
      url: "/admin/settings",
    },
  ];

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        style={{
          overflowY: "auto",
          overflowX: "hidden",
          backgroundColor: "#14142B",
        }}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo">
          <SideBarLogo />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {menuItem.map((item, index) => (
            <Menu.Item key={index} icon={item.icon}>
              <Link to={item.url}>{item.text}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content
          // className="site-layout-background"

          style={{
            overflow: "initial",
            position: "relative",
          }}
        >
          <TopNavbar toggle={toggle} collapsed={collapsed} />
          <main style={{ margin: "16px" }}>
            <Switch>
              <Route path="/admin" exact component={Statistics} />
              <Route path="/admin/team" component={Team} />
              <Route path="/admin/products" component={Products} />
              <Route path="/admin/tariflar" component={Tariflar} />
              <Route path="/admin/investment" component={Investment} />
              <Route path="/admin/settings" component={Settings} />
            </Switch>
          </main>

          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Admin;
