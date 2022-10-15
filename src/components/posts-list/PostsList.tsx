import PostItemContainer from "../../containers/post-item-container/PostItemContainer";
import { Link } from "react-router-dom";

import style from "./style-posts-list.module.sass";

interface IProps {
    postsIds: number[]
}

const PostList = (props: IProps) => {
    const { postsIds } = props;
    
    return (
        <>
            <button className={style.newPostBtn}>
                <Link className={style.link} to={`/posts/create`}>+ Add new post!</Link>
            </button>
            <ul>
                {postsIds.map(id => <PostItemContainer key={id} postId={id}/>)}
            </ul>
        </>
    )
}

export default PostList;