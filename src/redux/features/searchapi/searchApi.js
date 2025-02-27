export const searchApi = {
  fetchSearchResults: async (query) => {
    // Check for empty or invalid query
    if (!query || query.trim() === '') {
      return { error: 'Search query cannot be empty' };
    }

    const endpoint = `panel/search/${encodeURIComponent(query)}`;
    const url = base_url + endpoint;
    const headers = getHeader(); // Ensure token or other headers are set

    console.log("Calling Search API:", url, "with headers:", headers);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers,
      });

      console.log("Raw response from Search API:", response);

      if (!response.ok) {
        // Log error response when the status code is not ok
        const errorResponse = await response.json();
        console.error("Search API Error Response:", errorResponse);
        return { error: errorResponse.message || "Unknown Error" };
      }

      // Handle the successful response
      const responseData = await response.json();
      console.log("Search API Response Data:", responseData);

      return responseData;

    } catch (error) {
      // Catch network or other errors
      console.error("Search API Network Error:", error);
      return { error: error.message || "Network Error" };
    }
  },
};
