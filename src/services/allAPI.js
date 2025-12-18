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

///user/book/add  add book api - called by sellBook component when add book btn clicked
export const addBookAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/user/book/add`,reqBody,reqHeader)

}
//books/home :home page book api : called by home component when page loads
export const getHomePageBookAPI = async ()=>{
    return await commonAPI("GET",`${serverURL}/books/home`,{})
}
//books/all - bookpage api- called by books component when page loads - authorized user
export const getAllBooksPageAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/books/all`,{},reqHeader)
}
//user-books/all - bookpage api- called by bookstatus when page loads - authorized user
export const getAllUserBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}