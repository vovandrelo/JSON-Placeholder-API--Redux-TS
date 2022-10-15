import { postsActions } from "../index";
import { selectPostsIds } from "../selectors";
import axios from "axios";

import { ThunkAction } from "@reduxjs/toolkit";
import { IRootState } from "../../../..";
import { AnyAction } from "@reduxjs/toolkit";

import { ThunkDispatch } from "@reduxjs/toolkit";


export function loadPostsIfNotExistThunk(): ThunkAction<void, IRootState, unknown, AnyAction> {
    return async function (dispatch, getState) {
        const postsIds = selectPostsIds(getState());

        if (postsIds && postsIds.length > 0) {
            return;
        }

        dispatch(postsActions.startLoading());

        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/");
            dispatch(postsActions.successLoading({ posts: response.data }))
        } catch (error) {
            dispatch(postsActions.failedLoading())
        }
    }
}