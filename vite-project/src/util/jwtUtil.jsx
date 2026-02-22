import axios from "axios";
import { getCookie } from "./cookieUtil";


const jwtAxios = axios.create()

const beforeReq = (config) => {
  console.log("before request............")

  const memberInfo = getCookie("member")

  if(!memberInfo){
    console.log("Member NOT FOUND")
    return Promise.reject(
      {response:
        {data:
          {error:"REQUIRE_LOGIN"}
        }
      
    })
  }

  const {accessToken} = memberInfo

  console.log("보내는 토큰 확인 : " , accessToken)

  config.headers.Authorization = `Bearer ${accessToken}`

  return config
}

const requestFail = (err) => {
  console.log("request error....................")

  return Promise.reject(err)
}


const beforeRes = async (res) => {

  console.log("before return response............")

  console.log("---------------------------------")
  console.log("백엔드에서 온 데이터:", res.data) // <--- 여기를 확인하세요!
  console.log("---------------------------------")

  return res
}

const responseFail = (err) => {

  console.log("response fail error...............")

  return Promise.reject(err)
}

jwtAxios.interceptors.request.use(beforeReq, requestFail)

jwtAxios.interceptors.response.use(beforeRes, responseFail)

export default jwtAxios