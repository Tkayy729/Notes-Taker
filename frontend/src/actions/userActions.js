import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGUT,
} from "../constants/userConstants";
import { API_URL } from "../config/api_url";

import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  try {
    const config = {
      Headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${API_URL}/users/login`,
      {
        email,
        password,
      },
      config
    );
    console.log(data);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGUT });
};

// export const register = (email, password) => async (dispatch) => {
//   dispatch({ type: USER_LOGIN_REQUEST });

//   try {
//     const notify = () => toast("successfullyregistered");
//     const config = {
//       Headers: {
//         "content-type": "application/json",
//       },
//     };

//     const { data } = await axios.post(
//       `${API_URL}/users/login`,
//       {
//         email,
//         password,
//       },
//       config
//     );
//     console.log(data);
//     dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

//     localStorage.setItem("userInfo", JSON.stringify(data));

//     notify();
//   } catch (error) {
//     dispatch({
//       type: USER_LOGUT,
//       paylod:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
