import ApiCalls from "../../../api/apiCalls";
import { DOCTOR_DELETE, DOCTOR_EDIT, DOCTOR_LIST, SINGLE_DOCTOR } from "../../../api/apiEndPoints";
export const hitGetDoctrosList=async  => {
  const url = DOCTOR_LIST
  console.log(url );
  return ApiCalls.fetchGet( url )
    .then( response => {
      return response;
    } )
    .catch( _err => { 
        console.log(_err)
    } );
};
export const hitGetSingleDoctros=async (doctorId) => {
  const url = SINGLE_DOCTOR+`/${doctorId}`
  console.log(url );
  return ApiCalls.fetchGet( url )
    .then( response => {
      return response;
    } )
    .catch( _err => { 
        console.log(_err)
    } );
};
export const hitEditDoctros=async (doctorId,body) => {
  const url = DOCTOR_EDIT+`/${doctorId}`
  console.log(url );
  return ApiCalls.fetchPost(url,body )
    .then( response => {
      return response;
    } )
    .catch( _err => { 
        console.log(_err)
    } );
};
export const hitDoctorDelete=async (doctorId,body) => {
  const url = DOCTOR_DELETE+`/${doctorId}`
  console.log(url );
  return ApiCalls.fetchPost(url,body )
    .then( response => {
      return response;
    } )
    .catch( _err => { 
        console.log(_err)
    } );
};