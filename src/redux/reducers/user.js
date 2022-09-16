import { ADD_LOGIN_INFO } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_LOGIN_INFO: return { ...state, email: action.email };
  default: return state;
  }
}

export default user;
