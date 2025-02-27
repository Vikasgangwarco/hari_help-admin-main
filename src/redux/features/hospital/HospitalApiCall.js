
import ApiCalls from "../../../api/apiCalls";

import { HOSPITAL_CREATE } from "../../../api/apiEndPoints";

export const createHospital = async (hospitalData) => {
    const url = base_url + HOSPITAL_CREATE; // Replace with actual hospital creation endpoint
    const token = localStorage.getItem("token");
  
    if (!token) {
      console.error("Token is missing! Cannot make API call.");
      return { error: "Token is missing" };
    }
  
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  
    console.log("Calling create hospital API at:", url, "with data:", hospitalData);
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(hospitalData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Unknown error");
      }
  
      const responseJson = await response.json();
      console.log("Create hospital API response:", responseJson);
      return responseJson;
  
    } catch (error) {
      console.log("Hospital creation API error:", error);
      return { error: error.message || "Network error" };
    }
  };
  