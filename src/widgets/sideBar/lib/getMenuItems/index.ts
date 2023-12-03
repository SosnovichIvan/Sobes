import { items } from "../../config/menuItems";

export const getMenuItems = (isAuth: boolean) => {
  if (isAuth) return items.filter((x) => x.isAuth);

  return items.filter((x) => !x.isAuth);
};
