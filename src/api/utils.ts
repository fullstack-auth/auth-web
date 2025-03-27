type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const makeRequest = async (
  url: string,
  method: HTTPMethod,
  headers: HeadersInit = {},
  payload?: Record<string, any>
) => {
  const token = localStorage.getItem('access_token');
  
  const response = await fetch(url, {
    method,
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: payload ? JSON.stringify(payload) : undefined
  });

  if (!response.ok) {throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`)}

  return response.status !== 204 ? response.json() : null;
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('access_token');
  if (!token) return false;

  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decoded = JSON.parse(atob(base64));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error decoding token:', error);
    return false;
  }
};

