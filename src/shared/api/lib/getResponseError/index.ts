import { AxiosError } from "axios";

import { HttpStatus } from "shared/constants/http_status";

import type { ResponseError } from "../../../types/responseError";

export const getResponseError = (error: AxiosError): ResponseError => ({
  status: error?.status || HttpStatus.FORBIDDEN,
  message: error?.message || "empty error",
});
