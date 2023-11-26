import styled from "styled-components";

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 100%;
    height: 100%;
    min-height: 100%;

    .ant-spin-container {
      width: 100%;
      height: 100%;
    }
  }
`;
