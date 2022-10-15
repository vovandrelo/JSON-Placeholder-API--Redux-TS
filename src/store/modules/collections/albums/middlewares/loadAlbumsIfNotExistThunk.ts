import { selectAlbumsIds } from "../selectors";
import axios from "axios";
import { albumsActions } from "../index";
import { ThunkAction } from "redux-thunk";
import { IRootState } from "../../../..";
import { AnyAction } from 'redux'

export function loadAlbumsIfNotExistThunk(): ThunkAction<void, IRootState, unknown, AnyAction> {
    return async function (dispatch, getState) {
        const albumsIds = selectAlbumsIds(getState());
        if (albumsIds && albumsIds.length > 0) {
            return;
        }

        dispatch(albumsActions.startLoading());

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums/');
            dispatch(albumsActions.successLoading({ albums: response.data }))
        } catch (error) {
            dispatch(albumsActions.failedLoading())
        }
    }
}