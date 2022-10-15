import style from "./style-comment-item.module.sass";

interface IProps {
    name: string,
    email: string,
    body: string
}

const CommentItem = (props: IProps) => {
    const { name, email, body } = props;
    return (
        <li className={style.item}>
            <span className={style.name}>{name}</span>
            <span className={style.email}>{email}</span>
            <div className={style.body}>{body}</div>
        </li>
    )
}

export default CommentItem;