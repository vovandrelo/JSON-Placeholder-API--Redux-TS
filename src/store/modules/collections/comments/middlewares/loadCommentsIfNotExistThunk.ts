import { commentsActions } from "..";
import { IRootState } from "../../../..";
import { ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";

import axios from "axios";

export function loadCommentsIfNotExistThunk(postId: number): ThunkAction<void, IRootState, unknown, AnyAction> {
    return async function(dispatch, getState) {
        dispatch(commentsActions.startLoading({ postId }));

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            dispatch(commentsActions.successLoading({ comments: response.data, postId }))
        } catch (error) {
            dispatch(commentsActions.failedLoading({ postId }))
        }
    }
}