export const SIGNIN_REQUEST = '@auth/SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = '@auth/SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = '@auth/SIGNIN_FAILURE';
export const SIGNOUT = '@auth/SIGNOUT';

export const signinRequest = (Name, Password) => ({
  type: SIGNIN_REQUEST,
  payload: {
    Name,
    Password,
  },
});

export const signinFailure = (message) => ({
  type: SIGNIN_FAILURE,
  payload: {
    message,
    user: {},
  },
});

export const signinRequestSuccess = (user) => ({
  type: SIGNIN_SUCCESS,
  payload: {
    message: '',
    user,
  },
});

export const signOut = () => ({
  type: SIGNOUT,
});
