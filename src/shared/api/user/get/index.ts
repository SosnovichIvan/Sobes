import { http } from "shared/api/_http";
import type { User } from "shared/types/user";

export const getUser = () => http.get<User>("/user");
