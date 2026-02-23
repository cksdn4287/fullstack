import axios from "axios"

const rest_api_key = `be2da74dc576cd462dfe2571b8a2c2bd`
const redirect_uri = `http://localhost:5173/member/kakao`

const auth_code_path = `https://kauth.kakao.com/oauth/authorize`

const access_token_url = `https://kauth.kakao.com/oauth/token`

export const getKakaoLoginLink = () => {

  const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  return kakaoURL;
}

export const getAccessToken = async (authCode) => {

  const header = {
    headers:{
      "Content-Type":"application/x-www-form-urlencoded;charset=utf-8",
    }
  }

  // const params = {
  //   grant_type : "authorization_code",
  //   client_id: rest_api_key,
  //   redirect_uri:redirect_uri,
  //   code:authCode
  //   client_secret: "eOx3FCPMjYZ3A68keZev6fnmXj7NYPlx" 

  // }

  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("client_id", rest_api_key);
  params.append("redirect_uri", redirect_uri);
  params.append("code", authCode);
  params.append("client_secret", "eOx3FCPMjYZ3A68keZev6fnmXj7NYPlx" );

  const res = await axios.post(access_token_url, params, header)

  const accessToken = res.data.access_token
  
  return accessToken
}