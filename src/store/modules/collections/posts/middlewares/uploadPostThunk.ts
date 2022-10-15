import { postsActions } from "../index";
import axios from "axios";

import { ThunkAction } from "@reduxjs/toolkit";
import { IRootState } from "../../../..";
import { AnyAction } from "@reduxjs/toolkit";
import { IPost } from "../index";

export function uploadPostThunk(newPost: { title: string, body: string }): ThunkAction<void, IRootState, unknown, AnyAction> {
    return async function (dispatch, getState) {
        dispatch(postsActions.startUploading());

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                ...newPost,
                userId: 1,
            });
            dispatch(postsActions.successUploading({ post: response.data, method: "post" }))
        } catch (error) {
            dispatch(postsActions.failedUploading())
        }
    }
}