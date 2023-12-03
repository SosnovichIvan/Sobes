import { ConfigProvider } from "antd";
import AppRoutes from "providers/routes";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ConfigProvider>
          <AppRoutes />
        </ConfigProvider>
      </BrowserRouter>
    </div>
  );
};
