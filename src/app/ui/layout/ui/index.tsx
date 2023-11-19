import type { AppLayoutProps } from "./index.types";

const AppLayout = (props: AppLayoutProps) => {
  const { children } = props;

  return (
    <div>
      <div>header</div>
      <div>aside</div>
      <div> children : {children}</div>
    </div>
  );
};

export default AppLayout;
