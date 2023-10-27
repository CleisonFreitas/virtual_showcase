import { AxiosResponse } from "axios";

export type ExceptionType = {
    message: string;
    status: number;
}
export class ApiError extends Error implements ExceptionType {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export const handleApiError = (response: AxiosResponse) => {
  if (response.status !== 200) {
    throw new ApiError(
      response.status,
      `API request failed with status ${response.status}`
    );
  }
  return response.data;
};
