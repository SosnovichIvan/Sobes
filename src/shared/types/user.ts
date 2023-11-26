import type { Settings } from "./settings";

export type User = {
  isAuth: boolean;
  settings: Settings;
  firstRedirectPath: string;
};
