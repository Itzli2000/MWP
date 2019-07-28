export const reducer = (state = {}, action) => { 
    return { ...state , mystate: action.payload } 
}