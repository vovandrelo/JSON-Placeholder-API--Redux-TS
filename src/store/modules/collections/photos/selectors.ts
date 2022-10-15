import { IRootState } from "../../..";


export const selectPhotosModuleState = (state: IRootState) => state.collections.photos;
export const selectPhotosIds = (state: IRootState) => selectPhotosModuleState(state)?.ids;
export const selectPhotoById = (state: IRootState, photoId: number) => selectPhotosModuleState(state)?.entities[photoId];
export const selectPhotosIdsByAlbumId = (state: IRootState, albumId: number) => {
    const photosEntities = selectPhotosModuleState(state)?.entities;
    if (photosEntities) {
        return Object.values(photosEntities).filter(photo => +photo.albumId === +albumId).map(photo => photo.id)
    }
}
export const selectPhotosLoadingStatus = (state: IRootState) => selectPhotosModuleState(state)?.loadingStatus;