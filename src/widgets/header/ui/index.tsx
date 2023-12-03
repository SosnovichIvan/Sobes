import { Layout, Flex } from "antd";

export const Header = () => {
  const { Header } = Layout;

  return (
    <Header
      style={{
        color: "#fff",
      }}
    >
      <Flex>Твой помощник</Flex>
    </Header>
  );
};
