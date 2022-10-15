import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";

import { LOADING_STATUSES } from "../../store/constans/loading-statuses";
import { selectPhotosLoadingStatus, selectPhotosIdsByAlbumId } from "../../store/modules/collections/photos/selectors";
import { selectAlbumNameById } from "../../store/modules/collections/albums/selectors";
import { loadPhotosIfNotExistThunk } from "../../store/modules/collections/photos/middlewares/loadPhotosIfNotExistThunk";

import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";
import Slider from "../../components/slider/Slider";

const SliderContainer = () => {
    const params = useParams();
    const id: number = +(params.id as string);
    const loadingStatus = useAppSelector(selectPhotosLoadingStatus);

    const photosIds = useAppSelector(state => selectPhotosIdsByAlbumId(state, id));
    const albumName = useAppSelector(state => selectAlbumNameById(state, id));
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadPhotosIfNotExistThunk(id))
    }, [])

    if (loadingStatus === LOADING_STATUSES.inProgress) {
        return <Spinner/>
    } else if (loadingStatus === LOADING_STATUSES.failed) {
        return <Error/>
    } else {
        return (
            <>
                {!photosIds || photosIds.length === 0 || !albumName ? null : <Slider albumName={albumName} photosIds={photosIds}/>}
            </>
        )
    }
}

export default SliderContainer;