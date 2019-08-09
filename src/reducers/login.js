export const login = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, login: action.payload }
            
            case 'LOGIN_TYPE':
            return { ...state, login_type: action.payload }

        case 'FETCH_RESULT':
            return { ...state, fetch: action.payload }

        default:
            return { state }
    }
}