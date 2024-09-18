import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"




//login
export const loginApi = async(reqBody)=>{
  return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}

//get grievance
export const submitGrievanceApi = async()=>{
  return await commonApi('GET',`${serverUrl}/getgrievance`,"","")
}


