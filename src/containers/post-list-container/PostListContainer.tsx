import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { LOADING_STATUSES } from "../../store/constans/loading-statuses";
import { selectPostsIds, selectPostsLoadingStatus } from "../../store/modules/collections/posts/selectors";
import { loadPostsIfNotExistThunk } from "../../store/modules/collections/posts/middlewares/loadPostsIfNotExistThunk";

import PostList from "../../components/posts-list/PostsList";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";



const PostsListContainer = () => {
    const loadingStatus = useAppSelector(selectPostsLoadingStatus);    
    
    const postsIds = useAppSelector(selectPostsIds);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadPostsIfNotExistThunk())
    }, [])

    if (loadingStatus === LOADING_STATUSES.inProgress) {
        return <Spinner/>
    } else if (loadingStatus === LOADING_STATUSES.failed) {
        return <Error/>
    } else if (!loadingStatus || !postsIds || postsIds.length === 0) {
        return null
    } else {
        return <PostList postsIds={postsIds}/>
    }
}

export default PostsListContainer;