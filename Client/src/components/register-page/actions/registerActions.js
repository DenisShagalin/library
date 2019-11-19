export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';
export const REGISTER_NEW_USER_FAILURE = 'REGISTER_NEW_USER_FAILURE';

export const registerNewUser = (Name, Password) => ({
  type: REGISTER_NEW_USER,
  payload: {
    Name,
    Password,
  },
});

export const registerNewUserFailure = (message) => ({
  type: REGISTER_NEW_USER_FAILURE,
  payload: {
    message,
    role: null,
  },
});
