import { API } from "../../shared/api";
import Cookies from 'js-cookie';

export const userLogin = (formData) => async(dispatch, getState) => {
    dispatch({ type: "user_login" })

    try {
        const results = await API.post("/user/login/", formData);
        Cookies.set('user', JSON.stringify(results.data.userInfo));
        Cookies.set('token', results.data.token);
        dispatch({ type: "user_login_ok", payload: results.data });
    } catch (error) {
        dispatch({ type: "user_login_ko", payload: error })
    }
}

export const handleRegister = (formData) => async(dispatch) => {
    dispatch({ type: "register_user"})

    try {
        const results = await API.post("/user/register/", formData);
        dispatch({ type: "register_user_ok", payload: results.data});
        Cookies.set('token' , results.data.token);
    } catch (error) {
        dispatch({ type: "regiser_user_ko", payload: error })
    }
}

export const logoutUser = () => (dispatch) => {
    dispatch({ type: "user_logout"})
    Cookies.remove('token');
    Cookies.remove('user');
    try {
        dispatch({type : "logout_user_ok"})
    } catch (error) {
        dispatch({ type : "logout_user_ko"})
    }

}

