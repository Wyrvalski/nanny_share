import axios from "axios";
import qs from "qs";
export function sendService(request) {
  const LOGIN_API_ENDPOINT = `https://api.jungledevs.com/api/v1/challenge-newsletter/ `;
  const body = qs.stringify({
    name: request.user.name,
    email: request.user.email,
  });
  return new Promise((resolve, reject) => {
    try {
      const result = axios.post(LOGIN_API_ENDPOINT, body);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
