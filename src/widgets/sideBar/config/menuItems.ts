import { RESUME_PATH, SETTINGS_PATH, SOBES_PATH } from "shared/constants/path";

import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    key: RESUME_PATH,
    label: "Резюме",
  },
  {
    key: SOBES_PATH,
    label: "Собеседование",
  },
  {
    key: SETTINGS_PATH,
    label: "Настройки",
  },
];
