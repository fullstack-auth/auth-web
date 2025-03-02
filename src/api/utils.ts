type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const makeRequest = async (
  url: string,
  method: HTTPMethod,
  headers: HeadersInit = {},
  payload?: Record<string, any>
) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      ...headers
    },
    body: payload ? JSON.stringify(payload) : undefined
  });

  if (!response.ok) {throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`)}

  return response.status !== 204 ? response.json() : null;
};
