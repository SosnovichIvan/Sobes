import { lazy } from "react";

import {
  AUTH_PATH,
  RESUME_PATH,
  SETTINGS_PATH,
  SOBES_PATH,
} from "shared/constants/path";

import type { AppRoutes } from "../lib/getAppRoutes";

const SobesModule = lazy(() => import("sobesedovanie/App"));
const Auth = lazy(() => import("auth/App"));
const Rezume = lazy(() => import("rezume/App"));
const Settings = lazy(() => import("settings/App"));

export const appRoutes: AppRoutes[] = [
  {
    path: SOBES_PATH,
    Element: <SobesModule />,
  },
  {
    path: SETTINGS_PATH,
    Element: <Settings />,
  },
  {
    path: AUTH_PATH,
    Element: <Auth />,
  },
  {
    path: RESUME_PATH,
    Element: <Rezume />,
  },
];
