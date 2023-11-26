import { Layout, Flex } from "antd";
import { useGetAppSettings } from "providers/hooks/useGetAppSettings";

import { SideBar } from "widgets/sideBar";

import { Loader } from "shared/ui/loader";

import type { AppLayoutProps } from "./index.types";

import * as Styled from "./index.styled";

const AppLayout = (props: AppLayoutProps) => {
  const { isLoading } = useGetAppSettings();

  const { children } = props;

  const { Header, Footer, Content } = Layout;

  return (
    <Styled.AppLayoutWrapper>
      <Loader size="large" {...{ isLoading }}>
        <Layout style={{ width: "100%", height: "100%" }}>
          <Header style={{ color: "#fff" }}>
            <Flex>header</Flex>
          </Header>
          <Layout>
            <SideBar />
            <Layout>
              <Content style={{ padding: "12px 12px" }}>
                children : {children}
              </Content>
              <Footer style={{ padding: "6px 6px", height: "84px" }}>
                <Flex
                  align="center"
                  justify="flex-start"
                  style={{ height: "100%" }}
                >
                  footer
                </Flex>
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </Loader>
    </Styled.AppLayoutWrapper>
  );
};

export default AppLayout;
