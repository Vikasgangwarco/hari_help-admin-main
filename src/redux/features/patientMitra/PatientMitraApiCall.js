import ApiCalls from "../../../api/apiCalls";
import {
  PATIENT_MITRA_CREATE,
  PATIENT_MITRA_DELETE,
  PATIENT_MITRA_EDIT,
  PATIENT_MITRA_LIST,
  SINGLE_PATIENT_MITRA,
} from "../../../api/apiEndPoints";

// New function for creating a patient mitra
export const CreatePatientMitra = async (patientMitraData) => {
  const url = PATIENT_MITRA_CREATE;
  console.log(url);
  // Replace 'body' with 'patientMitraData'
  return ApiCalls.fetchPost(url, patientMitraData) 
    .then((response) => {
      return response;
    })
    .catch((_err) => {
      console.log(_err);
    });
};

export const hitGetPatientMitraList = async () => {
  const url = PATIENT_MITRA_LIST;
  console.log(url);
  return ApiCalls.fetchGet(url)
    .then((response) => {
      return response;
    })
    .catch((_err) => {
      console.log(_err);
    });
};

export const hitGetSinglePatientMitra = async (patientMitraId) => {
  const url = SINGLE_PATIENT_MITRA + `/${patientMitraId}`;
  console.log(url);
  return ApiCalls.fetchGet(url)
    .then((response) => {
      return response;
    })
    .catch((_err) => {
      console.log(_err);
    });
};

export const hitEditPatientMitra = async (patientMitraId, patientMitraData) => {
  const url = PATIENT_MITRA_EDIT + `/${patientMitraId}`;
  console.log(url);
  // Replace 'body' with 'patientMitraData'
  return ApiCalls.fetchPost(url, patientMitraData)
    .then((response) => {
      return response;
    })
    .catch((_err) => {
      console.log(_err);
    });
};

export const hitPatientMitraDelete = async (patientmitraId, patientMitraData) => {
  const url = PATIENT_MITRA_DELETE + `/${patientmitraId}`;
  console.log(url);
  // Replace 'body' with 'patientMitraData'
  return ApiCalls.fetchPost(url, patientMitraData)
    .then((response) => {
      return response;
    })
    .catch((_err) => {
      console.log(_err);
    });
};
