import { IRootState } from "../../..";


export const selectCommentsModuleState = (state: IRootState) => state.collections.comments;
export const selectCommentsIds = (state: IRootState) => selectCommentsModuleState(state)?.ids;
export const selectCommentById = (state: IRootState, commentId: number) => selectCommentsModuleState(state)?.entities[commentId];
//export const selectCommentsIdsByPostId = (state: IRootState, postId: number) => (Object.values(selectCommentsModuleState(state)?.entities)?.filter(comment => comment.postId === postId)).map(comment => comment.id);

export const selectCommentsIdsByPostId = (state: IRootState, postId: number) => {
    const commentsEntities = selectCommentsModuleState(state)?.entities;
    if (commentsEntities) {
        return (Object.values(commentsEntities)?.filter(comment => comment.postId === postId)).map(comment => comment.id);
    }
}

export const selectCommentsLoadingStatus = (state: IRootState, postId: number) => selectCommentsModuleState(state)?.loadingStatus[postId];