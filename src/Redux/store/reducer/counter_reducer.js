import { COUNTER } from "../../types";

export default function (state = {}, action) {
    switch (action.type) {
        case COUNTER:
            return { ...state, count: action.payload };
        default:
            return state;
    }
}
