import { Layout } from "antd";
import { useGetAppSettings } from "providers/hooks/useGetAppSettings";

import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { SideBar } from "widgets/sideBar";

import { Loader } from "shared/ui/loader";

import type { AppLayoutProps } from "./index.types";

import * as Styled from "./index.styled";

const AppLayout = (props: AppLayoutProps) => {
  const { isLoading } = useGetAppSettings();

  const { children } = props;

  const { Content } = Layout;

  return (
    <Styled.AppLayoutWrapper>
      <Loader size="large" {...{ isLoading }}>
        <Layout style={{ width: "100%", height: "100%" }}>
          <Header />
          <Layout>
            <SideBar />
            <Layout>
              <Content style={{ padding: "12px 12px" }}>
                children : {children}
              </Content>
              <Footer />
            </Layout>
          </Layout>
        </Layout>
      </Loader>
    </Styled.AppLayoutWrapper>
  );
};

export default AppLayout;
