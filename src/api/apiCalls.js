import { base_url } from "../utils/config"; // Base URL from config
import { getHeader } from "../utils/utils"; // Function to get headers (with token, etc.)
import { POST, GET } from "./apiTypes"; // POST and GET methods from your API types
import {
  PATIENT_CREATE,
  LOGIN,
  PATIENT_LIST,
  PATIENT_DETAILS,
  PATIENT_UPDATE,
  PATIENT_DELETE,
  DOCTOR_CREATE, // Import the correct doctor creation endpoint
  PATIENT_COUNT,
  DOCTOR_COUNT,
  APPOINTMENT_COUNT,
  PATIENT_MITRA_COUNT
} from "../api/apiEndPoints"; // Import necessary API endpoints

const ApiCalls = {
  // Generic POST fetch function (can be reused for any POST request)
  fetchGet: function (endpoint) {
    const url = base_url + endpoint;
    console.log('url', url)
    const headers = getHeader();
    console.log("headers===========",headers)
    return fetch(url, {
      method: GET,
      headers: headers,
    })
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.log('error log of url', url, error, headers);
        return error;
      });
  },
  fetchPost: function (endpoint, data) {
    const url = base_url + endpoint; // Construct the full URL for the endpoint
    const headers = getHeader(); // Get headers for authentication (e.g., token)

    console.log("Calling POST API at:", url, "with data:", data); // Debug log

    return fetch(url, {
      method: POST, // POST method for sending data
      headers: headers,
      body: JSON.stringify(data), // Convert the data to JSON format
    })
      .then((response) => response.json()) // Assuming server returns JSON
      .then((responseJson) => {
        console.log("API response:", responseJson); // Debug log
        return responseJson; // Return the server response for further handling
      })
      .catch((error) => {
        console.log("API error:", error); // Debug log
        return { error: error.message || "Network error" };
      });
  },

  // Patient creation API function
  createPatient: function (patientData) {
    const url = base_url + PATIENT_CREATE; // Use the patient creation endpoint from apiEndPoints.js
    const token = localStorage.getItem("token"); // Get token from localStorage

    if (!token) {
      console.error("Token is missing! Cannot make API call.");
      return Promise.reject("Token is missing");
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    console.log("Calling create patient API at:", url, "with data:", patientData);

    return fetch(url, {
      method: POST,
      headers: headers,
      body: JSON.stringify(patientData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "Unknown error");
          });
        }
        return response.json();
      })
      .then((responseJson) => {
        console.log("Create patient API response:", responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log("Patient creation API error:", error);
        return { error: error.message || "Network error" };
      });
  },

  // Login API function
  login: function (loginData) {
    const url = base_url + LOGIN;
    const headers = {
      "Content-Type": "application/json",
    };

    console.log("Calling login API at:", url, "with data:", loginData);

    return fetch(url, {
      method: POST,
      headers: headers,
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("Login API response:", responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log("Login API error:", error);
        return { error: error.message || "Network error" };
      });
  },

  // Get Patients List API function
  getPatients: function () {
    const url = base_url + PATIENT_LIST;
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token is missing! Cannot make API call.");
      return Promise.reject("Token is missing");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    console.log("Calling get patients API at:", url);

    return fetch(url, {
      method: GET,
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "Unknown error");
          });
        }
        return response.json();
      })
      .then((responseJson) => {
        console.log("Get patients API response:", responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log("Get patients API error:", error);
        return { error: error.message || "Network error" };
      });
  },

  // Get a single patient's details by ID
  getPatientById: function (id) {
    const url = base_url + PATIENT_DETAILS.replace(":id", id); // Replace :id with actual patient ID
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token is missing! Cannot make API call.");
      return Promise.reject("Token is missing");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    console.log("Calling get patient details API at:", url);

    return fetch(url, {
      method: GET,
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "Unknown error");
          });
        }
        return response.json();
      })
      .then((responseJson) => {
        console.log("Get patient details API response:", responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log("Get patient details API error:", error);
        return { error: error.message || "Network error" };
      });
  },

  // Update Patient API function (using POST)
  updatePatient: function (patientId, patientData) {
    const url = base_url + PATIENT_UPDATE.replace(":id", patientId); // Replace `:id` with actual patient ID
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token is missing! Cannot make API call.");
      return Promise.reject("Token is missing");
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    console.log("Calling update patient API at:", url, "with data:", patientData);

    return fetch(url, {
      method: POST, // Use POST method for updating patient data
      headers: headers,
      body: JSON.stringify({ ...patientData, id: patientId }), // Include patient ID in request body
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "Unknown error");
          });
        }
        return response.json();
      })
      .then((responseJson) => {
        console.log("Update patient API response:", responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log("Update patient API error:", error);
        return { error: error.message || "Network error" };
      });
  },

  // Delete Patient API function (using POST)
  deletePatient: function (patientId) {
    const url = base_url + PATIENT_DELETE.replace(":id", patientId); // Replace `:id` with actual patient ID
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token is missing! Cannot make API call.");
      return Promise.reject("Token is missing");
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    console.log("Calling delete patient API at:", url);

    return fetch(url, {
      method: POST, // Use POST method for deleting patient data
      headers: headers,
      body: JSON.stringify({ id: patientId }), // Send patient ID in the body
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "Unknown error");
          });
        }
        return response.json();
      })
      .then((responseJson) => {
        console.log("Delete patient API response:", responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log("Delete patient API error:", error);
        return { error: error.message || "Network error" };
      });
  },

  // Doctor creation API function
  createDoctor: function (doctorData) {
    const url = base_url + DOCTOR_CREATE; // Corrected URL with 'panel/doctor_create' endpoint
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token is missing! Cannot make API call.");
      return Promise.reject("Token is missing");
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    console.log("Calling create doctor API at:", url, "with data:", doctorData);

    return fetch(url, {
      method: POST,
      headers: headers,
      body: JSON.stringify(doctorData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "Unknown error");
          });
        }
        return response.json();
      })
      .then((responseJson) => {
        console.log("Create doctor API response:", responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log("Doctor creation API error:", error);
        return { error: error.message || "Network error" };
      });
  },
  // Get Patient Count API function
  getPatientCount: function () {
    const url = base_url + PATIENT_COUNT;
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token is missing! Cannot make API call.");
      return Promise.reject("Token is missing");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    console.log("Calling get patient count API at:", url);

    return fetch(url, {
      method: GET,
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "Unknown error");
          });
        }
        return response.json();
      })
      .then((responseJson) => {
        console.log("Get patient count API response:", responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log("Get patient count API error:", error);
        return { error: error.message || "Network error" };
      });
  },

  // Get Doctor Count API function
  getDoctorCount: function () {
    const url = base_url + DOCTOR_COUNT;
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token is missing! Cannot make API call.");
      return Promise.reject("Token is missing");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    console.log("Calling get doctor count API at:", url);

    return fetch(url, {
      method: GET,
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "Unknown error");
          });
        }
        return response.json();
      })
      .then((responseJson) => {
        console.log("Get doctor count API response:", responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log("Get doctor count API error:", error);
        return { error: error.message || "Network error" };
      });
  },

  // Get Appointment Count API function
  getAppointmentCount: function () {
    const url = base_url + APPOINTMENT_COUNT;
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token is missing! Cannot make API call.");
      return Promise.reject("Token is missing");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    console.log("Calling get appointment count API at:", url);

    return fetch(url, {
      method: GET,
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "Unknown error");
          });
        }
        return response.json();
      })
      .then((responseJson) => {
        console.log("Get appointment count API response:", responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log("Get appointment count API error:", error);
        return { error: error.message || "Network error" };
      });
  },

  // Get Patient Mitra Count API function
  getPatientMitraCount: function () {
    const url = base_url + PATIENT_MITRA_COUNT;
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token is missing! Cannot make API call.");
      return Promise.reject("Token is missing");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    console.log("Calling get patient mitra count API at:", url);

    return fetch(url, {
      method: GET,
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "Unknown error");
          });
        }
        return response.json();
      })
      .then((responseJson) => {
        console.log("Get patient mitra count API response:", responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log("Get patient mitra count API error:", error);
        return { error: error.message || "Network error" };
      });
  },
};

export default ApiCalls;
