import { REQUEST_CURRENCY,
  RECEIVE_CURRENCY,
  RECEIVE_CURRENCY_FAILURE,
  RECEIVE_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  UPDATE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  toEdit: 0,
  error: '',
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCY: return { ...state, ...action.payload };
  case RECEIVE_CURRENCY: return { ...state, currencies: action.currencies };
  case RECEIVE_EXPENSE: return {
    ...state,
    expenses: [...state.expenses, action.expenses],
  };
  case RECEIVE_CURRENCY_FAILURE: return { ...state, error: action.error };
  case DELETE_EXPENSE: return {
    ...state,
    expenses: [...state.expenses]
      .filter(
        (expense) => expense !== action.expenses,
      ),
  };
  case EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      toEdit: action.id,
    };
  case UPDATE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.expense.id) {
          return action.expense;
        }
        return expense;
      }),
      editor: false,
    };
  default: return state;
  }
}

export default wallet;
