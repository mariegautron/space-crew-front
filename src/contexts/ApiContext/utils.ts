export const URL = "http://localhost:8080";

export interface ApiResponse<T> {
  data: T | null;
  error?: string;
}

export const callApi = async <T>(
  url: string,
  method = "GET",
  config?: RequestInit
): Promise<ApiResponse<T>> => {
  const response = await fetch(`${URL}${url}`, {
    ...config,
    method: method.toUpperCase(),
  });

  if (response.ok) {
    if (method.toUpperCase() === "DELETE") {
      return { data: null };
    } else {
      const json = await response.json();
      return { data: json };
    }
  } else {
    const json = await response.json();
    return { data: null, error: json.message };
  }
};
