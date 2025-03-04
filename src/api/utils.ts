type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const makeRequest = async (
  url: string,
  method: HTTPMethod,
  headers: HeadersInit = {},
  payload?: Record<string, any>
) => {
  const token = localStorage.getItem('access_token');  // Retrieve the token
  
  const response = await fetch(url, {
    method,
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      ...headers,
      Authorization: token ? `Bearer ${token}` : '', // Attach token if available
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
    // Split the token into its parts (header, payload, and signature)
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Fix URL encoding

    // Decode the payload part of the token
    const decoded = JSON.parse(atob(base64));
    const currentTime = Date.now() / 1000;

    // Check if the token is expired
    if (decoded.exp < currentTime) {
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error decoding token:', error);
    return false;
  }
};

