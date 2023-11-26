import { SpinProps } from "antd";
import { ReactNode } from "react";

export type loaderProps = {
  children?: ReactNode;
  isLoading: boolean;
  title?: string;
  size: SpinProps['size']
};
