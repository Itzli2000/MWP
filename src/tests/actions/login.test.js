import { LOGIN, LOGIN_TYPE } from './../../constants';
import { login_type, login } from './../../actions';

test('should set login type', () => {
  const data = { 
    type: LOGIN_TYPE ,
    payload: {}
  };
const action = login_type(data.payload);
  expect(action).toEqual(data);
});

test('should set login as', () => {
  const data = {
    type: LOGIN,
    payload: {}
  }
  const action = login(data.payload);
  expect(action).toEqual(data);
});