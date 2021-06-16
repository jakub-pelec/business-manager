import { LOG_IN, LOG_OUT } from '../actions/types';

const INITIAL_STATE = {
    authorized: false,
};

export default (state = INITIAL_STATE, { type }) => {
    switch (type) {
        case LOG_IN:
            return { ...state, authorized: true };
        case LOG_OUT:
            return { ...state, authorized: false };
        default:
            return state;
    }
};
