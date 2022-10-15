import { postsActions } from "../index";
import axios from "axios";

import { ThunkAction } from "@reduxjs/toolkit";
import { IRootState } from "../../../..";
import { AnyAction } from "@reduxjs/toolkit";

export function deletePostThunk(id: number): ThunkAction<void, IRootState, unknown, AnyAction> {
    return async function (dispatch, getState) {
        dispatch(postsActions.startUploading());

        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);            
            dispatch(postsActions.successUploading({ post: { id }, method: "delete" }))
        } catch (error) {
            dispatch(postsActions.failedUploading())
        }
    }
}