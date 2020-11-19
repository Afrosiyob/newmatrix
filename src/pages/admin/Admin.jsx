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
import { useTranslation } from "react-i18next";
import SideBarLogo from "../../components/SideBarlogo/SideBarLogo";
import TopNavbar from "../../components/TopNavbar/TopNavbar";

const { Sider, Content, Footer } = Layout;

function Admin() {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const menuItem = [
    {
      icon: <HomeOutlined />,
      text: "Home ",
    },
    {
      icon: <LineChartOutlined />,
      text: "Statistics ",
    },
    {
      icon: <TeamOutlined />,
      text: "Team ",
    },
    {
      icon: <BarcodeOutlined />,
      text: "Marketing ",
    },
    {
      icon: <RiseOutlined />,
      text: "Finans ",
    },
    {
      icon: <DingdingOutlined />,
      text: "My investment ",
    },
    {
      icon: <SettingOutlined />,
      text: "Settings ",
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
          {menuItem.map((item, index) => (
            <Menu.Item key={index} icon={item.icon}>
              {item.text + " " + index + t("msg")}
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
            <br />
            Really
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            long
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
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
