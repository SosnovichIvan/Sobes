import { ConfigProvider } from "antd";
import AppRoutes from "providers/routes";

export const App = () => {
  return (
    <div>
      <ConfigProvider>
        <AppRoutes />
      </ConfigProvider>
    </div>
  );
};
