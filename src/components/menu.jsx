import React from "react";
import { Menu } from 'antd';
import {  HomeFilled , SettingOutlined, HddFilled } from '@ant-design/icons';
import 'antd/dist/antd.css'
import '../style/menu.css'
import logo from '../img/logo.png'


const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

 const MenuNav = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu mode="inline" className="menu"openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 224 }}>
        <img src={logo} alt="logo" className="menu-logo"/>
        <p className="logo-title1">Plataforma de acceso</p><p className="logo-title">a documentos </p>
      <Menu.Item key="mail" icon={<HomeFilled />} className="list">
        {/* <Menu.Item className="item" key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item> */}
        Principal
      </Menu.Item>
      <SubMenu key="sub2" icon={<HddFilled />} title="Navigation Two">
      <Menu.Item key="4">Option 4</Menu.Item>
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<HddFilled />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default MenuNav;