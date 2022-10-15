import AlbumItemContainer from "../../containers/album-item-container/AlbumItemContainer";

import style from "./album-list.module.sass";

interface IProps {
    albumsIds: number[]
}

const AlbumsList = (props: IProps) => {
    const { albumsIds } = props;
    return(
        <ul className={style.list}>
            {albumsIds.map(albumId => <AlbumItemContainer key={albumId} albumId={albumId}/>)}
        </ul>
    )
}

export default AlbumsList;