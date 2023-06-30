import { Button, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const { Header, Sider, Content, Footer } = Layout;
import "./style.less";
import { Link, Outlet } from "react-router-dom";
import Search from "../design-components/Search";

const menu = [
  {
    key: "dashboard",
    icon: <i className="fa-solid fa-house"></i>,
    label: "Dashboard",
  },
  {
    key: "user",
    icon: <i className="fa-solid fa-users-gear"></i>,
    label: "User",
  },
  {
    key: "category",
    icon: <i className="fa-solid fa-table-list"></i>,
    label: "Category",
  },
];

export const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [wLogo, setWLogo] = useState(250);
  const onChangeCollapsed = () => setCollapsed(!collapsed);
  useEffect(() => {
    window
      .matchMedia("(max-width:900px)")
      .addEventListener("change", onChangeCollapsed);
  }, [window.matchMedia("(min-width: 900px)").matches]);

  useEffect(() => {
    if (collapsed) setWLogo(80);
    else setWLogo(250);
  }, [collapsed]);

  return (
    <Layout className="main">
      <Header className="header flex-center">
        <div
          className="logo flex-center"
          style={{
            width: wLogo,
          }}
        >
          <img src="../src/assets/images/logo-dark.png" alt="" />
        </div>
        <Button
          className="btn-collapsed"
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onChangeCollapsed}
        />
        <Search />
      </Header>
      <Layout className="container">
        <Sider
          className="sider"
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={260}
        >
          <Menu
            className="menu"
            mode="inline"
            theme="dark"
            defaultSelectedKeys={["/"]}
            //selectedKeys={[location.pathname.split("/")[1] ?? ""]}
          >
            {menu.map((m) => (
              <Menu.Item className="menu-item" key={m.key} icon={m.icon}>
                <Link className="link-item" to={m.key}>
                  {m.label}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Content className="content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
