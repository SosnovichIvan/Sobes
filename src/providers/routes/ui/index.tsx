import { Suspense, useMemo } from "react";

import { Routes, Route } from "react-router-dom";

import AppLayout from "./layout";

import { getAppRoutes } from "../lib/getAppRoutes";

import { AppRoutesProps } from "./index.types";
const AppRoutes = (props: AppRoutesProps) => {
  const { path, children } = props;

  const routes = useMemo(() => getAppRoutes(path, children), [path, children]);

  return (
    <Suspense>
      <AppLayout>
        <Routes>
          {routes.map(({ path, Element }) => (
            <Route key={path} path={path} element={Element} />
          ))}
        </Routes>
      </AppLayout>
    </Suspense>
  );
};

export default AppRoutes;
