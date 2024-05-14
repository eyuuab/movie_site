import { UPDATE_CHOIES } from "./types";

export const updateChoies = (choices) => {
    return {
        type: UPDATE_CHOIES,
        payload: choices
    };
};