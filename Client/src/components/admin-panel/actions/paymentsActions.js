export const LOAD_PAYMENTS = 'LOAD_PAYMENTS';
export const SET_PAYMENTS = 'SET_PAYMENTS';

export const loadPayments = () => ({
  type: LOAD_PAYMENTS,
});

export const setPayments = (payments) => ({
  type: SET_PAYMENTS,
  payload: payments,
});