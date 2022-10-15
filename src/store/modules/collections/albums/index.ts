import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LOADING_STATUSES } from "../../../constans/loading-statuses"

export interface IAlbum {
    userId: number,
    id: number,
    title: string,
}

export interface IAlbumsState {
    entities: {
        [propName: string]: IAlbum,
    },
    ids: number[],
    loadingStatus: LOADING_STATUSES,
}

const initialState: IAlbumsState = {
    entities: {},
    ids: [],
    loadingStatus: LOADING_STATUSES.notStarted,
}

export const albumsSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loadingStatus = LOADING_STATUSES.inProgress;
        },
        successLoading: (state, action: PayloadAction<{ albums: IAlbum[] }>) => {
            const albums = action.payload.albums;
            
            state.entities = albums.reduce((acc, album) => {
                acc[album.id] = album;
                return acc;
            }, state.entities);
            state.ids = state.ids.concat(albums.map(({ id }) => id));
            state.loadingStatus = LOADING_STATUSES.success;
        },
        failedLoading: (state) => {
            state.loadingStatus = LOADING_STATUSES.failed;
        },
    }
});

export const albumsActions = albumsSlice.actions;