import ApiCalls from "../../../api/apiCalls";
import {
  CLINIC_CREATE,
  CLINIC_DELETE,
  CLINIC_EDIT,
  CLINIC_LIST,
  SINGLE_CLINIC,
} from "../../../api/apiEndPoints";

// New function for creating a clinic
export const CreateClinic = async (clinicData) => {
  const url = CLINIC_CREATE;
  console.log(url);
  // Replace 'body' with 'clinicData'
  return ApiCalls.fetchPost(url, clinicData)
    .then((response) => {
      return response;
    })
    .catch((_err) => {
      console.log(_err);
    });
};

// Function to get the list of clinics
export const hitGetClinicsList = async () => {
  const url = CLINIC_LIST;
  console.log(url);
  return ApiCalls.fetchGet(url)
    .then((response) => {
      return response;
    })
    .catch((_err) => {
      console.log(_err);
    });
};

// Function to get details of a single clinic
export const hitGetSingleClinic = async (clinicId) => {
  const url = SINGLE_CLINIC + `/${clinicId}`;
  console.log(url);
  return ApiCalls.fetchGet(url)
    .then((response) => {
      return response;
    })
    .catch((_err) => {
      console.log(_err);
    });
};

// Function to edit clinic details
export const hitEditClinic = async (clinicId, clinicData) => {
  const url = CLINIC_EDIT + `/${clinicId}`;
  console.log(url);
  // Replace 'body' with 'clinicData'
  return ApiCalls.fetchPost(url, clinicData)
    .then((response) => {
      return response;
    })
    .catch((_err) => {
      console.log(_err);
    });
};

// Function to delete a clinic
export const hitClinicDelete = async (clinicId, clinicData) => {
  const url = CLINIC_DELETE + `/${clinicId}`;
  console.log(url);
  // Replace 'body' with 'clinicData'
  return ApiCalls.fetchPost(url, clinicData)
    .then((response) => {
      return response;
    })
    .catch((_err) => {
      console.log(_err);
    });
};
