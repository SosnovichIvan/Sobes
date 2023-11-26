import type { ResponseError } from "shared/types/responseError";

export const useNotification = () => {
  const handleShowError = (e: ResponseError) => {
    console.error(e, "notification");
  };

  const handleShowNotification = () => {
    console.warn("notification");
  };

  return { handleShowError, handleShowNotification };
};
