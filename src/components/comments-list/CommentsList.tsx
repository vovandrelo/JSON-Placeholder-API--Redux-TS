import CommentItemContainer from "../../containers/comment-item-container/CommentItemContainer"

interface IProps {
    commentsIds: number[]
}

const CommentsList = (props: IProps) => {
    const { commentsIds } = props;
    return (
        <ul>
            {commentsIds.map(commentId => <CommentItemContainer key={commentId} commentId={commentId}/>)}
        </ul> 
    )
}

export default CommentsList