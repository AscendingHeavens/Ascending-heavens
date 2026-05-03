interface GeneralApiResponse<T> {
  code: number;
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}