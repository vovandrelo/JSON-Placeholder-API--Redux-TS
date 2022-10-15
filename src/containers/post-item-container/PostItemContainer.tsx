import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";

import { selectPostById } from "../../store/modules/collections/posts/selectors";
import { deletePostThunk } from "../../store/modules/collections/posts/middlewares/deletePostThunk";
import { postsActions } from "../../store/modules/collections/posts";

import PostItem from "../../components/post-item/PostItem";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";

interface IProps {
    postId: number
}

const PostItemContainer = (props: IProps) => {
    const post = useAppSelector(state => selectPostById(state, props.postId))
    const dispatch = useAppDispatch();
    const [deletPost, setDeletePost] = useState(false)
    
    const onDeletePost = (id: number) => {
        dispatch(deletePostThunk(id));
        setDeletePost(true);
    }

    if (post && !deletPost) {
        const { id, title, body } = post;
        return <PostItem id={id} title={title} body={body} onDeletePost={() => onDeletePost(id)}/>
    } else if (deletPost) {
        return <Spinner/>
    } else {
        return null;
    }
}


export default PostItemContainer;