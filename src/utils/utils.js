// utils.js
import AppUser from "./appUser";

let appUser = AppUser.getInstance();

// Function to get headers for API requests
export function getHeader(isFormData = false) {
  let headers = {};
  const localtoken = localStorage.getItem("token");
  let token = 'Bearer ' + localtoken;
  // If token exists, add Authorization header
  if (localtoken && token.length > 0) {
    headers = {
      Authorization: token,
      accept: 'application/json',
      'Content-Type': 'application/json',
    };
  } else {
    // If no token, default headers for JSON or FormData
    headers = {
      accept: isFormData ? '*/*' : 'application/json',
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
    };
  }

  return headers;
}
