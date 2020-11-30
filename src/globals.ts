export const SERVER_URL = 'http://localhost:8000/api/';

export function getUserToken(): string | null {
  return localStorage.getItem('@USER-TOKEN');
}
