import {AlertAction, AlertState} from "../types"
import {SET_ALERT} from "../Constants";

const initialState: AlertState = {
    message: ''
}
const alertReducer = (state = initialState, action: AlertAction): AlertState => {
    switch (action.type) {
        case SET_ALERT:
            return {
                message: action.payload
            }
        default:
            return state;
    }
}

export default alertReducer;