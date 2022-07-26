const BASE_URL = "http://localhost:3001/";

// authentication routes
export const SIGN_IN = "/sign-in";

//authenticated routes
export const HOME = "/";

//un-authenticated routes
// export const HOME = "/";

export const VISIT_API = BASE_URL + "api/v1/visit/all-visit/";
export const VISIT_FILE_UPLOAD_API = BASE_URL + "api/v1/visit/file-upload/";
export const SIGN_IN_API = BASE_URL + "api/v1/account/login/";
export const SIGN_UP_API = BASE_URL + "api/v1/account/register/";
