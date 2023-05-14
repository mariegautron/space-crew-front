export interface ApiResponse<T> {
  data: T | null;
  error?: string;
}

export const URL = "https://space-crew-api.onrender.com";

export const callApi = async <T>(
  url: string,
  method = "GET",
  config?: RequestInit & { body?: string }
): Promise<ApiResponse<T>> => {
  const response = await fetch(`${import.meta.env.VITE_HOST || URL}${url}`, {
    ...config,
    method: method.toUpperCase(),
    body: config?.body || undefined,
    headers: {
      ...(config?.headers ?? {}),
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
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
