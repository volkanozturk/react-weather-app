import {AlertAction} from "../types";
import {SET_ALERT} from "../Constants";

export const setAlert = (message: string): AlertAction => {
    return {
        type: SET_ALERT,
        payload: message
    }
}