import { Spin } from "antd";

import type { loaderProps } from "./index.types";

import * as Styled from "./index.styled";

export const Loader = (props: loaderProps) => {
  const { children, isLoading, title = "Loading", size } = props;

  return (
    <Styled.LoaderWrapper>
      <Spin spinning={isLoading} tip={title} {...{ size }}>
        {!isLoading && children}
      </Spin>
    </Styled.LoaderWrapper>
  );
};
