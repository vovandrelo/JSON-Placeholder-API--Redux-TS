import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LOADING_STATUSES } from "../../../constans/loading-statuses"


export interface IPhoto {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
}

export interface IPhotosState {
    entities: {
        [propName: string]: IPhoto,
    },
    ids: number[],
    loadingStatus: LOADING_STATUSES,
}


const initialState: IPhotosState = {
    entities: {},
    ids: [],
    loadingStatus: LOADING_STATUSES.notStarted,
}

export const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loadingStatus = LOADING_STATUSES.inProgress;
        },
        successLoading: (state, action: PayloadAction<{ photos: IPhoto[] }>) => {
            const photos = action.payload.photos;

            state.entities = photos.reduce((acc, photo) => {
                acc[photo.id] = photo;
                return acc;
            }, state.entities);
            state.ids = state.ids.concat(photos.map(({ id }) => id));
            state.loadingStatus = LOADING_STATUSES.success;
        },
        failedLoading: (state) => {
            state.loadingStatus = LOADING_STATUSES.failed;
        },
    }
});

export const photosActions = photosSlice.actions;