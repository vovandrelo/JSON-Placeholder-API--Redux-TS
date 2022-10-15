import axios from "axios";

import { ThunkAction } from "@reduxjs/toolkit";
import { IRootState } from "../../../..";
import { AnyAction } from "@reduxjs/toolkit";

import { photosActions } from "..";

export function loadPhotosIfNotExistThunk(albumId: number): ThunkAction<void, IRootState, unknown, AnyAction> {
    return async function(dispatch, getState) {
        dispatch(photosActions.startLoading());

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
            dispatch(photosActions.successLoading({ photos: response.data }))
        } catch (error) {
            dispatch(photosActions.failedLoading())
        }
    }
}