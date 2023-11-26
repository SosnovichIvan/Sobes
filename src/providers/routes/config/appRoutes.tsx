import { lazy } from "react";

import { AUTH_PATH, SOBES_PATH } from "shared/constants/path";

import type { AppRoutes } from "../lib/getAppRoutes";

const SobesModule = lazy(() => import("sobesedovanie/App"));
// const Auth = lazy(() => import("auth/App"));
// const Rezume = lazy(() => import("rezume/App"));
// const Settings = lazy(() => import("settings/App"));

export const appRoutes: AppRoutes[] = [
  {
    path: SOBES_PATH,
    Element: <SobesModule />,
  },
  {
    path: AUTH_PATH,
    Element: <div>AUTH</div>,
  },
];
