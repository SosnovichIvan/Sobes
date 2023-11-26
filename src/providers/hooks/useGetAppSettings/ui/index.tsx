import { useEffect, useState } from "react";

import { useNotification } from "providers/hooks/useNotification";
import { userReducer } from "providers/store";
import { useNavigate } from "react-router-dom";

import { getUser } from "shared/api/user/get";
import { AUTH_PATH } from "shared/constants/path";

export const useGetAppSettings = () => {
  const navigate = useNavigate();

  const { handleShowError } = useNotification();

  const [isLoading, setIsLoading] = useState(false);

  const isAuth = userReducer((state) => state.isAuth);

  useEffect(() => {
    setIsLoading(true);
    getUser()
      .then((d) => {
        if (d.isAuth) {
          const { firstRedirectPath } = d;
          navigate(firstRedirectPath);
        }
        if (!d.isAuth) {
          navigate(AUTH_PATH);
        }
      })
      .catch((e: any) => {
        navigate(AUTH_PATH);
        handleShowError(e);
      })
      .finally(() => setIsLoading(false));
  }, [isAuth]);

  return { isLoading };
};
