export interface BaseResponse<T> {
    isSuccess: boolean;
    message: string;
    result: T;
  }