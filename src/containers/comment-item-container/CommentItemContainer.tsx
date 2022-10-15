import { useSelector } from "react-redux"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Error from "../../components/error/Error";

import { selectCommentById } from "../../store/modules/collections/comments/selectors";
import CommentItem from "../../components/comment-item/CommentItem";

interface IProps {
    commentId: number
}

const CommentItemContainer = (props: IProps) => {
    const { commentId } = props;
    const comment = useAppSelector(state => selectCommentById(state, commentId));

    if (comment) {
        return <CommentItem name={comment.name} email={comment.email} body={comment.body}/>
    } else {
        return <Error/>
    }
}

export default CommentItemContainer