import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";

import { selectPostsUploadingStatus } from "../../store/modules/collections/posts/selectors";
import { LOADING_STATUSES } from "../../store/constans/loading-statuses";
import { postsActions } from "../../store/modules/collections/posts";
import { uploadPostThunk } from "../../store/modules/collections/posts/middlewares/uploadPostThunk";

import PostForm from "../../components/post-form/PostForm";
import Spinner from "../../components/spinner/Spinner";
import Accept from "../../components/accept/Accept";
import Error from "../../components/error/Error";

interface INewPostData {
    title: string,
    body: string,
}

const CreatePostContainer = () => {
    const uploadingStatus = useAppSelector(selectPostsUploadingStatus)

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const uploadPost = (newPostData: INewPostData) => {
        dispatch(uploadPostThunk(newPostData));
    }

    if (uploadingStatus === LOADING_STATUSES.notStarted) {
        return <PostForm inputValue={""} textareaValue={""} saveData={uploadPost}/>
    } else if (uploadingStatus === LOADING_STATUSES.inProgress) {
        return <Spinner/>
    } else if (uploadingStatus === LOADING_STATUSES.success) {
        setTimeout(() => {
            dispatch(postsActions.resetUploadingStatus())
            navigate('/posts')
        }, 400)
        return <Accept/>
    } else if (uploadingStatus === LOADING_STATUSES.failed) {
        return <Error/>
    } else {
        return null;
    }
}

export default CreatePostContainer;