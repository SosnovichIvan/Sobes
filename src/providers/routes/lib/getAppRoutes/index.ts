import { ReactNode } from "react";

import { appRoutes } from "../../config/appRoutes";

import type { AppRoutes } from "./index.types";

export const getAppRoutes = (
  path?: string,
  children?: ReactNode,
): AppRoutes[] => {
  return appRoutes.map((x) => {
    if (x.path === path) return { ...x, Element: children };
    return x;
  });
};

export type { AppRoutes };
