import CommentsListContainer from "../../containers/comments-list-container/CommentsListContainer";
import IconDelete from "../icon-delete/IconDelete";
import IconEdit from "../icon-edit/IconEdit";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "./style-post-item.module.sass";
import classNames from "classnames";

interface IProps {
    id: number, 
    title: string,
    body: string,
    onDeletePost: () => void,
}

const PostItem = (props: IProps) => {
    const {id, title, body, onDeletePost} = props;
    const [active, secActive] = useState(false);
    const navigate = useNavigate();

    const onChangeState = () => {
        secActive(curActive => !curActive)
    }

    return (
        <li className={style.item}>
            <div className={style.content}>
                <span className={style.title}>{title}</span>
                <div className={style.descr}>
                    <div className={style.text}>{body}</div>
                    <div className={style.actions}>
                        <IconDelete onClickHandler={onDeletePost}/>
                        <IconEdit onClickHandler={() => navigate(`edit/${id}`)}/>
                    </div>
                </div>
            </div>
            <button
                className={classNames(style.btn, {[style.activeBtn]: active})}
                onClick={onChangeState}>
                Show comments
            </button>
            <div className={classNames(style.comments, {[style.active]: active})}>
                {active ? <CommentsListContainer postId={id}/> : null}
            </div>
        </li>
    )
}

export default PostItem;