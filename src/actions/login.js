import { LOGIN, LOGIN_TYPE } from './../constants';

export const login = payload => ({ type: LOGIN, payload });

export const login_type = payload => ({ type: LOGIN_TYPE, payload });

export const fetch_result = payload => ({ type: 'FETCH_RESULT', payload });

export const fetch_action = payload => {
  var query = 1;
  if (payload === 'Expert')
    query = 2;
  return dispatch => {
    fetch(`https://rickandmortyapi.com/api/character/${query}`).then(
      data => data.json()
    ).then(
      response => {
        let isLogged = false;
        if (response.id === 1) {
          isLogged = true;
        }
        dispatch(fetch_result(response));
        dispatch(login(isLogged));
      }
    )
  }
};