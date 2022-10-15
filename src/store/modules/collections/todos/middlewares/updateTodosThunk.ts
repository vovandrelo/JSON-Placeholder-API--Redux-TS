import { todosActions } from "../index";
import axios from "axios";
import { selectCompletedTodosById, selectNotCompletedTodosById } from "../selectors";

import { ThunkAction } from "@reduxjs/toolkit";
import { IRootState } from "../../../..";
import { AnyAction } from "@reduxjs/toolkit";

export function updateTodosThunk(changedIds: number[]): ThunkAction<void, IRootState, unknown, AnyAction> {
    return async function (dispatch, getState) {
        if (changedIds?.length !== 0) {
            dispatch(todosActions.startLoading());
            const changedItems = changedIds.map(id => {
                const todos = selectCompletedTodosById(getState(), id) || selectNotCompletedTodosById(getState(), id);
                return axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, todos)
            });

            Promise.all(changedItems)
            .then(function(response) {
                const todos = response.map(item => item.data);
                dispatch(todosActions.successLoading({ todos })); 
            })
            .catch(function (error) {
                dispatch(todosActions.failedLoading());
            })
        }
    }
}