// onboardingApiCalls.js
import ApiCalls from "../../../api/apiCalls";
import { LOGIN } from "../../../api/apiEndPoints";  // Import LOGIN endpoint

// Hit Login API function
export const hitLogInApi = async (data) => {
  return ApiCalls.fetchPost(LOGIN, data)  // Call fetchPost from ApiCalls
    .then(response => {
      // Check if response status is success
      if (response.status === 'success') {
        // Extract token from the response (as per the given response structure)
        const token = response.data.token;  // Token is in response.data.token
        if (token) {
          console.log("Extracted Token: ", token);

          // Return the token and user data
          return { token: token, data: response.data };
        } else {
          return { error: "Token not found in the response" };
        }
      } else {
        // If login failed or status is not success
        return { error: "Login failed" };
      }
    })
    .catch(err => {
      console.log("Error during login API call", err);
      return { error: "An error occurred" };
    });
};
