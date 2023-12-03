import {
  AUTH_PATH,
  RESUME_PATH,
  SETTINGS_PATH,
  SOBES_PATH,
} from "shared/constants/path";

export const getSelectedKey = (path: string) => {
  if (path.includes(RESUME_PATH)) return [RESUME_PATH];
  if (path.includes(SOBES_PATH)) return [SOBES_PATH];
  if (path.includes(SETTINGS_PATH)) return [SETTINGS_PATH];
  if (path.includes(AUTH_PATH)) return [AUTH_PATH];
};
