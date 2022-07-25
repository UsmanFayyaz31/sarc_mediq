const BASE_URL = "http://localhost:3001/";

// authentication routes
export const SIGN_IN = "/sign-in";

//authenticated routes
export const HOME = "/";

//un-authenticated routes
// export const HOME = "/";

export const USER = BASE_URL + "api/v1/user/";
export const SIGN_IN_API = BASE_URL + "api/v1/user/login/"
export const SIGN_UP_API = BASE_URL + "api/v1/user/register/"