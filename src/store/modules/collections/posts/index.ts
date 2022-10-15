import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOADING_STATUSES } from "../../../constans/loading-statuses";

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export interface IPostsState {
    entities: {
        [propName: string]: IPost,
    },
    ids: number[],
    loadingStatus: LOADING_STATUSES,
    uploadingStatus: LOADING_STATUSES,
}

const initialState: IPostsState = {
    entities: {},
    ids: [],
    loadingStatus: LOADING_STATUSES.notStarted,
    uploadingStatus: LOADING_STATUSES.notStarted,
}

export const postsSlice = createSlice({
    name: "posts",
    initialState,

    reducers: {
        startLoading: (state) => {
            state.loadingStatus = LOADING_STATUSES.inProgress;
        },
        successLoading: (state, action: PayloadAction<{ posts: IPost[] }>) => {
            const posts = action.payload.posts;

            state.entities = posts.reduce((acc, post) => {
                acc[post.id] = post;
                return acc;
            }, state.entities);
            state.ids = state.ids.concat(posts.map(({ id }) => id));
            state.loadingStatus = LOADING_STATUSES.success;
        },
        failedLoading: (state) => {
            state.loadingStatus = LOADING_STATUSES.failed;
        },
        startUploading: (state) => {
            state.uploadingStatus = LOADING_STATUSES.inProgress;
        },
        successUploading: (state, action: PayloadAction<{ post: IPost | { id: number }, method: string }>) => {
            const method = action.payload.method;

            if (method === "delete") {
                const post = action.payload.post as { id: number };
                state.ids = state.ids.filter(id => id !== post.id);
                delete state.entities[post.id];
                // what about the comments?
            } else {
                const post = action.payload.post as IPost;
                state.entities[post.id] = post;
                if (!state.ids.includes(post.id)) {
                    state.ids.push(post.id)
                }
            }
            state.uploadingStatus = LOADING_STATUSES.success;
            
        },
        failedUploading: (state) => {
            state.uploadingStatus = LOADING_STATUSES.failed;
        },
        resetUploadingStatus: (state) => {
            state.uploadingStatus = LOADING_STATUSES.notStarted;
        }
    }
})

export const postsActions = postsSlice.actions;