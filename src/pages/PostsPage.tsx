import Content from "../components/content/Content";
import PostsListContainer from "../containers/post-list-container/PostListContainer";
import { Outlet } from "react-router-dom";

const PostsPage = () => {
    return (
        <>
            <Content>
                <PostsListContainer/>
            </Content>
            <Outlet/>
        </>
    )
}

export default PostsPage;