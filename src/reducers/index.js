export const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, login: action.payload }
            break;

        case 'LOGIN_TYPE':
            return { ...state, login_type: action.payload }
            break;

        default:
            return { state }
            break;
    }
}