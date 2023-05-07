export const URL = "http://localhost:8080";

export interface ApiResponse<T> {
  data: T | null;
  error?: string;
}

export const callApi = async <T>(
  url: string,
  config?: RequestInit
): Promise<ApiResponse<T>> => {
  const response = await fetch(`${URL}${url}`, config);
  const json = await response.json();
  if (response.ok) {
    return { data: json };
  } else {
    return { data: null, error: json.message };
  }
};
