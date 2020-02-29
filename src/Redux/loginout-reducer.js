const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
    ],
};

const logInOut = (state = initialState, action) => {


    switch (action.type) {

        case LOGIN:

            return {
                ...state,

                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case LOGOUT:

            return {
                ...state,

                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

            case SET_USERS:{
                return { ...state, users: [ ...state.users, ...action.users ]}
            }

        default:
            return state;
    };
};

export const loginAC = (userId) => ({ type: LOGIN, userId })
export const logoutAC = (userId) => ({ type: LOGOUT, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


export default logInOut