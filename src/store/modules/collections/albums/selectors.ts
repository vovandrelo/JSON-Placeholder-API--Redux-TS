import { IRootState } from "../../..";

export const selectAlbumsModuleState = (state: IRootState) => state.collections.albums;
export const selectAlbumsIds = (state: IRootState) => selectAlbumsModuleState(state)?.ids;
export const selectAlbumById = (state: IRootState, albumId: number) => selectAlbumsModuleState(state)?.entities[albumId];
export const selectAlbumNameById = (state: IRootState, albumId: number) => selectAlbumById(state, albumId)?.title;
export const selectAlbumsLoadingStatus = (state: IRootState) => selectAlbumsModuleState(state)?.loadingStatus;