import { todosActions } from "../index";
import axios from "axios";

import { ThunkAction } from "@reduxjs/toolkit";
import { IRootState } from "../../../..";
import { AnyAction } from "@reduxjs/toolkit";
import { ITodos } from "../index";

export function createTodosTunk(newTodosItem: {title: string, completed: boolean, userId: number}): ThunkAction<void, IRootState, unknown, AnyAction> {
    return async function (dispatch, getState) {
        dispatch(todosActions.startLoading());

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/todos", newTodosItem);
            dispatch(todosActions.successLoading({todos: [response.data]}));
        } catch (error) {
            dispatch(todosActions.failedLoading())
        }
    }
}