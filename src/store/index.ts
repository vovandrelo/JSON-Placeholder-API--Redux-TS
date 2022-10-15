import { configureStore } from "@reduxjs/toolkit";
// <==========================================================================> \\
import { postsSlice } from "./modules/collections/posts";
import { commentsSlice } from "./modules/collections/comments";
import { albumsSlice } from "./modules/collections/albums";
import { photosSlice } from "./modules/collections/photos";
import { todosSlice } from "./modules/collections/todos";
// <==========================================================================> \\
import { IAlbum } from "./modules/collections/albums";
import { IAlbumsState } from "./modules/collections/albums";
import { IComment } from "./modules/collections/comments";
import { ICommentsState } from "./modules/collections/comments";
import { IPost } from "./modules/collections/posts";
import { IPostsState } from "./modules/collections/posts";
import { IPhoto } from "./modules/collections/photos";
import { IPhotosState } from "./modules/collections/photos";
import { ITodos } from "./modules/collections/todos";
import { ITodosState } from "./modules/collections/todos";

// <================================ ACTION TYPES ================================> \\
interface IActionType {
    type: string,
    payload: object,
}
interface IAlbumsAction extends IActionType {
    payload: {
        albums?: IAlbum[],
    }
}
interface ICommentsAction extends IActionType {
    payload: {
        postId?: number,
        comments?: IComment[],
    }
}
interface IPostsAction extends IActionType {
    payload: {
        post?: IPost,
        method?: string,
        posts?: IPost[],
    }
}
interface IPhotosAction extends IActionType {
    payload: {
        photos?: IPhoto[],
    }
}
interface ITodosAction extends IActionType {
    payload: {
        todos?: ITodos[],
    }
}
type Action =
    IAlbumsAction |
    ICommentsAction |
    IPostsAction |
    IPhotosAction |
    ITodosAction; 

// <========================== STATE & DISPATCH TYPE =========================> \\

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// <============================== INITIAL STATE ==============================> \\

export interface IRootState {
    collections: {
        albums?: IAlbumsState,
        comments?: ICommentsState,
        posts?: IPostsState,
        photos?: IPhotosState,
        todos?: ITodosState,
    }
}
const rootInitialState: IRootState = {
    collections: {}
};
const rootReducer = (state = rootInitialState, action: Action) => {
    return {
        collections: {
            posts: postsSlice.reducer(state.collections.posts, action),
            comments: commentsSlice.reducer(state.collections.comments, action),
            albums: albumsSlice.reducer(state.collections.albums, action),
            photos: photosSlice.reducer(state.collections.photos, action),
            todos: todosSlice.reducer(state.collections.todos, action),
        },
    }
}

// <============================ CONFIGURATE STORE ============================> \\
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
});