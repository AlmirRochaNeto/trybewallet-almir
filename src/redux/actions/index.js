import getCurrenciesFromApi from '../../helpers/currenciesAPI';

export const ADD_LOGIN_INFO = 'ADD_LOGIN_INFO';
export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSE';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
export const RECEIVE_CURRENCY_FAILURE = 'RECEIVE_CURRENCY_FAILURE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

const receiveCurrency = (currencies) => ({
  type: RECEIVE_CURRENCY,
  currencies: Object.keys(currencies).filter((key) => key !== 'USDT'),
});

const receiveExpense = (state) => ({
  type: RECEIVE_EXPENSE,
  expenses: state,
});

const receiveCurrencyFailure = (errorMessage) => ({
  type: RECEIVE_CURRENCY_FAILURE,
  error: errorMessage,
});

export const fetchCurrencies = () => async (dispacth) => {
  dispacth(requestCurrency());
  try {
    const response = await getCurrenciesFromApi();
    const sucessAction = receiveCurrency(response);
    dispacth(sucessAction);
  } catch (error) {
    const failureAction = receiveCurrencyFailure(error);
    dispacth(failureAction);
  }
};

export function login(payload) {
  return {
    type: ADD_LOGIN_INFO,
    email: payload.email,
  };
}

export const fetchCurrenciesFull = (state) => async (dispacth) => {
  dispacth(requestCurrency());
  try {
    const response = await getCurrenciesFromApi();
    const sucessAction = receiveExpense({
      ...state,
      exchangeRates: response,
    });
    dispacth(sucessAction);
  } catch (error) {
    const failureAction = receiveCurrencyFailure(error);
    dispacth(failureAction);
  }
};

export const deleteButtonClick = (event) => ({
  type: DELETE_EXPENSE,
  expenses: event,
});

export const editExpense = (event) => ({
  type: EDIT_EXPENSE,
  id: event,
});

export const updateExpense = (expense) => ({
  type: UPDATE_EXPENSE,
  expense,
});
