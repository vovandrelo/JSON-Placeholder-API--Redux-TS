import { Link } from "react-router-dom";

import style from "./style-album-item.module.sass";

interface IProps {
    id: number,
    title: string,
}

const AlbumItem = (props: IProps) => {
    const { id, title } = props;
    return (
        <li className={style.item}><Link className={style.link} to={`/albums/${id}`}>Album: {title}</Link></li>
    )
}

export default AlbumItem;