import { API_BASE_URL, DEFAULT_GET_API_HEADER, DEFAULT_POST_API_HEADER, DEFAULT_FORM_DATA_HEADER } from "../constants";

const handleResponse = async <T>(
  response: Response,
): Promise<GeneralApiResponse<T>> => {
  const json = (await response.json()) as GeneralApiResponse<T>;
 
  if (!json.success) {
    throw new Error(json.message || "API Error");
  }

  return json;
};


export const ApiService = {
  get: async <T>(url: string) => {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      method: "GET",
      headers: DEFAULT_GET_API_HEADER(),
    });

    return handleResponse<T>(res);
  },

  post: async <T>(url: string, body: unknown) => {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: DEFAULT_POST_API_HEADER(),
    });

    return handleResponse<T>(res);
  },

  put: async <T>(url: string, body: unknown) => {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: DEFAULT_POST_API_HEADER(),
    });

    return handleResponse<T>(res);
  },

  delete: async <T>(url: string, body?: unknown) => {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      method: "DELETE",
      body: JSON.stringify(body ?? {}),
      headers: DEFAULT_POST_API_HEADER(),
    });

    return handleResponse<T>(res);
  },

  postFormData: async <T>(url: string, formData: FormData) => {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      method: "POST",
      body: formData,
      headers: DEFAULT_FORM_DATA_HEADER(),
    });

    return handleResponse<T>(res);
  },
};