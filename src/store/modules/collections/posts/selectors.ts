import { IRootState } from "../../..";

export const selectPostsModuleState = (state: IRootState) => state.collections.posts;
export const selectPostsIds = (state: IRootState) => selectPostsModuleState(state)?.ids;
export const selectPostById = (state: IRootState, postId: number) => selectPostsModuleState(state)?.entities[postId];
export const selectPostsLoadingStatus = (state: IRootState) => selectPostsModuleState(state)?.loadingStatus;
export const selectPostsUploadingStatus = (state: IRootState) => selectPostsModuleState(state)?.uploadingStatus;