import { auth } from '../firebase/config';
import { LOG_IN, LOG_OUT } from './types';

export const login =
    ({ email, password, push }) =>
    async (dispatch) => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (e) {
            throw new Error(e);
        }
        dispatch({ type: LOG_IN });
        push('/home');
    };

export const logout = () => async (dispatch) => {
    try {
        await auth.signOut();
    } catch (e) {
        throw new Error(e);
    }
    dispatch({ type: LOG_OUT });
};
