const INITIAL_STATE = {
    user : null,
    token: null,
    error: null,
    auth : false,
    isLoading: false
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "user_login" : {
            return {...state, isLoading: true }
        }
        case "user_login_ok" : {
            return {...state, isLoading: false , user: action.payload.userData, token : action.payload.token , auth : true}
        }
        case "user_login_ko" : {
            return {...state, isLoading: false , error: action.payload}
        }
        case "register_user" : {
            return {...state, isLoading : true}
        }
        case "register_user_ok" : {
            return {...state, isLoading : false , user: action.payload.newEmail , token: action.payload.token, error:null , auth : true}
        }
        case "register_user_ko" : {
            return {...state, isLoading : false ,  error : action.payload}
        }
        default : {
            return state
        }
        case "logout_user" : {
            return {...state, isLoading: true}
        }
        case "logout_user_ok" : {
            return {...state, isLoading: false, ...INITIAL_STATE}
        }
        case "logout_user_ko" : {
            return {...state, isLoading: false , error: action.payload}
        }
    }
}

export default authReducer;
