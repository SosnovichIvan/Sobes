import { userReducer } from "providers/store";

export const getIsAuthSelector = () => userReducer((state) => state.isAuth);
