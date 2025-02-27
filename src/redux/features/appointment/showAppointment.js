import ApiCalls from '../../../api/apiCalls'
import { SHOW_APPOINTMENT } from '../../../api/apiEndPoints';
export const hitShowAppointment = async () => {
    const url = SHOW_APPOINTMENT;
    console.log(url);
    
    return ApiCalls.fetchGet(url)
      .then(response => {
        return response;
      })
      .catch(_err => {
        console.log(_err);
      });
  };
  