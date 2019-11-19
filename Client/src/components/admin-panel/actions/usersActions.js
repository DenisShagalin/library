export const LOAD_USERS = 'GET_USERS';
export const SET_USERS = 'SET_USERS';
export const UPDATE_USER_ROLE = 'UPDATE_USER_ROLE';

export const loadUsers = () => ({
  type: LOAD_USERS,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const updatUserRole = (roleId, id) => ({
  type: UPDATE_USER_ROLE,
  payload: {
    roleId,
    id,
  },
});

