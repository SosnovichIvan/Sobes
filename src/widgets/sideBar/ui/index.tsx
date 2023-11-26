import { useMemo } from "react";

import { Flex, Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { items } from "../config/menuItems";
import { getSelectedKey } from "../lib/getSelectedKey";

export const SideBar = () => {
  const { Sider } = Layout;

  const location = useLocation();
  const navigate = useNavigate();

  const selectKeys = useMemo(
    () => getSelectedKey(location.pathname),
    [location],
  );

  const handleClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Sider style={{ padding: "12px 12px", color: "#fff" }}>
      <Flex vertical>
        <Menu
          onClick={handleClick}
          defaultSelectedKeys={selectKeys}
          mode="inline"
          theme="dark"
          inlineCollapsed={false}
          items={items}
        />
      </Flex>
    </Sider>
  );
};
