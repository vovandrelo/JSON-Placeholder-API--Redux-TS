import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOADING_STATUSES } from "../../../constans/loading-statuses";

export interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

export interface ICommentsState {
    entities: {
        [propName: string]: IComment,
    },
    ids: number[],
    loadingStatus: {
        [propName: string]: LOADING_STATUSES,
    }
}

const initialState: ICommentsState = {
    entities: {},
    ids: [],
    loadingStatus: {},
}

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        startLoading: (state, { payload: { postId }}) => {
            state.loadingStatus[postId] = LOADING_STATUSES.inProgress;
        },
        successLoading: (state, action: PayloadAction<{ comments: IComment[], postId: number }>) => {
            const comments = action.payload.comments;
            const postId = action.payload.postId;
            
            state.entities = comments.reduce((acc, comm) => {
                acc[comm.id] = comm;
                return acc;
            }, state.entities);
            state.ids = state.ids.concat(comments.map(({ id }) => id));
            delete state.loadingStatus[postId];
        },
        failedLoading: (state, { payload: { postId }}) => {
            state.loadingStatus[postId] = LOADING_STATUSES.failed;
        },
    }
});

export const commentsActions = commentsSlice.actions;