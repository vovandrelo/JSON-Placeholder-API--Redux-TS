import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { loadCommentsIfNotExistThunk } from "../../store/modules/collections/comments/middlewares/loadCommentsIfNotExistThunk";
import { selectCommentsLoadingStatus, selectCommentsIdsByPostId } from "../../store/modules/collections/comments/selectors";
import { LOADING_STATUSES } from "../../store/constans/loading-statuses";

import CommentsList from "../../components/comments-list/CommentsList";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/error/Error";

interface IProps {
    postId: number
}

const CommentsListContainer = (props: IProps) => {
    const { postId } = props;

    const loadingStatus = useAppSelector(state => selectCommentsLoadingStatus(state, postId));
    const commentsIds = useAppSelector(state => selectCommentsIdsByPostId(state, postId));
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadCommentsIfNotExistThunk(postId))
    }, [])

    if (loadingStatus === LOADING_STATUSES.inProgress) {
        return <Spinner/>
    } else if (loadingStatus === LOADING_STATUSES.failed) {
        return <Error/>
    } else if (commentsIds && commentsIds.length !== 0) {
        return <CommentsList commentsIds={commentsIds ? commentsIds : []}/>
    } else {
        return <div>Комментарии отсутствуют</div>
    }
}


export default CommentsListContainer