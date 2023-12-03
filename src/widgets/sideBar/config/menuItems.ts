import {
  AUTH_PATH,
  RESUME_PATH,
  SETTINGS_PATH,
  SOBES_PATH,
} from "shared/constants/path";

import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number] & { isAuth: boolean };

export const items: MenuItem[] = [
  {
    key: RESUME_PATH,
    label: "Резюме",
    isAuth: true,
  },
  {
    key: SOBES_PATH,
    label: "Собеседование",
    isAuth: true,
  },
  {
    key: SETTINGS_PATH,
    label: "Настройки",
    isAuth: true,
  },
  {
    key: AUTH_PATH,
    label: "Авторизация",
    isAuth: false,
  },
];
