import { Layout, Flex } from "antd";

export const Footer = () => {
  const { Footer } = Layout;

  return (
    <Footer
      style={{
        padding: "6px 6px",
        height: "84px",
        boxShadow: "1px -2px 12px 2px rgba(34, 60, 80, 0.2)",
        background: "#f9f9f9",
      }}
    >
      <Flex align="center" justify="flex-start" style={{ height: "100%" }}>
        Ivan Sosnovich @ 2023
      </Flex>
    </Footer>
  );
};
