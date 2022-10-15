import { postsActions } from "../index";
import { selectPostsIds } from "../selectors.js";
import axios from "axios";

import { ThunkAction } from "@reduxjs/toolkit";
import { IRootState } from "../../../..";
import { AnyAction } from "@reduxjs/toolkit";
import { IPost } from "../index";

export function updatePostThunk(editedPost: IPost): ThunkAction<void, IRootState, unknown, AnyAction> {
    return async function (dispatch, getState) {
        dispatch(postsActions.startUploading());

        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${editedPost.id}`, editedPost);
            dispatch(postsActions.successUploading({ post: response.data, method: "put" }))
        } catch (error) {
            dispatch(postsActions.failedUploading())
        }
    }
}