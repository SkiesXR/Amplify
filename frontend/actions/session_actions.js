import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const REMOVE_USER = 'REMOVE_USER';

export const removeUser = (user) => ({
    type: REMOVE_USER,
    userId: user.id
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const receiveCurrentUser = currentUser => {
   return {type: RECEIVE_CURRENT_USER,
    currentUser}
};

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const deleteUser = user => dispatch => (
    APIUtil.destroy(user).then(user => (
    dispatch(removeUser(user))
    ), err => {
    return dispatch(receiveErrors(err.responseJSON))
    }
));

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => {
        return dispatch(receiveErrors(err.responseJSON))
    })
);

export const login = user => dispatch => (
    APIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => {
        return dispatch(receiveErrors(err.responseJSON))
    })
);

export const logout = () => dispatch => (
    APIUtil.logout().then(user => (
        dispatch(logoutCurrentUser())
    ))
);
