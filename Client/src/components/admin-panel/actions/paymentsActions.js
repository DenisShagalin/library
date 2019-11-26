export const LOAD_PAYMENTS = 'LOAD_PAYMENTS';
export const SET_PAYMENTS = 'SET_PAYMENTS';

export const loadPayments = (userId = '') => ({
  type: LOAD_PAYMENTS,
  payload: userId,
});

export const setPayments = (payments) => ({
  type: SET_PAYMENTS,
  payload: payments,
});