import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

//register api - called by auth component when register btn clicked
export const registerAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/register`,userDetails)

}
//login api - called by auth component when login btn clicked
export const loginAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/login`,userDetails)

}
//google sig-in google login api cleed by auth component when login using google button
export const googleLoginAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)

}