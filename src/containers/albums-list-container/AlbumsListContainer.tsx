import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { selectAlbumsIds, selectAlbumsLoadingStatus } from "../../store/modules/collections/albums/selectors";
import { loadAlbumsIfNotExistThunk } from "../../store/modules/collections/albums/middlewares/loadAlbumsIfNotExistThunk";
import { LOADING_STATUSES } from "../../store/constans/loading-statuses";

import Error from "../../components/error/Error";
import Spinner from "../../components/spinner/Spinner";
import AlbumsList from "../../components/albums-list/AlbumsList";

const AlbumsListContainer = () => {
    const loadingStatus = useAppSelector(selectAlbumsLoadingStatus);

    const albumsIds = useAppSelector(selectAlbumsIds);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadAlbumsIfNotExistThunk())
    }, [])


    if (!loadingStatus || !albumsIds || loadingStatus === LOADING_STATUSES.failed) {
        return <Error/>
    } else if (loadingStatus === LOADING_STATUSES.inProgress) {
        return <Spinner/>
    } else if (albumsIds.length === 0) {
        return null
    } else {
        return <AlbumsList albumsIds={albumsIds}/>
    }
}

export default AlbumsListContainer;