import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { LOADING_STATUSES } from "../../store/constans/loading-statuses";
import { selectPostById, selectPostsUploadingStatus } from "../../store/modules/collections/posts/selectors";
import { postsActions } from "../../store/modules/collections/posts";
import { updatePostThunk } from "../../store/modules/collections/posts/middlewares/updatePostThunk";

import Accept from "../../components/accept/Accept";
import Error from "../../components/error/Error";
import PostForm from "../../components/post-form/PostForm";
import Spinner from "../../components/spinner/Spinner";

interface INewPostData {
    title: string,
    body: string,
}

const EditPostContainer = () => {
    const uploadingStatus = useAppSelector(selectPostsUploadingStatus)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const params = useParams();
    const id: number = +(params.id as string);

    const editedPost = useAppSelector(state => selectPostById(state, id))

    if (!uploadingStatus || !editedPost || uploadingStatus === LOADING_STATUSES.failed) {
        return <Error/>
    }

    const updatePost = (post: INewPostData) => {
        dispatch(updatePostThunk({...post, id: editedPost.id, userId: editedPost.userId}));
    }

    if (uploadingStatus === LOADING_STATUSES.notStarted && editedPost) {
        return <PostForm inputValue={editedPost.title} textareaValue={editedPost.body} saveData={updatePost}/>
    } else if (uploadingStatus === LOADING_STATUSES.inProgress) {
        return <Spinner/>
    } else if (uploadingStatus === LOADING_STATUSES.success) {
        setTimeout(() => {
            dispatch(postsActions.resetUploadingStatus())
            navigate('/posts')
        }, 400)
        return <Accept/>
    } else {
        return null;
    }
}

export default EditPostContainer;