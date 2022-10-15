import { todosActions } from "../index";
import axios from "axios";

import { ThunkAction } from "@reduxjs/toolkit";
import { IRootState } from "../../../..";
import { AnyAction } from "@reduxjs/toolkit";

export function loadTodosIfNotExistThunk(): ThunkAction<void, IRootState, unknown, AnyAction> {
    return async function (dispatch, getState) {
        dispatch(todosActions.startLoading());

        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos?userId=1");
            dispatch(todosActions.successLoading({ todos: response.data })) 
        } catch (error) {
            dispatch(todosActions.failedLoading())
        }
    }
}