import { selectAlbumById } from "../../store/modules/collections/albums/selectors";
import { useAppSelector } from "../../store/hooks";
import AlbumItem from "../../components/album-item/AlbumItem";
import Error from "../../components/error/Error";

interface IProps {
    albumId: number
}

const AlbumItemContainer = (props: IProps) => {
    const { albumId } = props;
    const album = useAppSelector(state => selectAlbumById(state, albumId))

    if (album) {
        return <AlbumItem title={album.title} id={album.id}/>
    } else {
        return <Error/>
    }
}

export default AlbumItemContainer;