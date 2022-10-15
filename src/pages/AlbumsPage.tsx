import Content from "../components/content/Content";

import { Outlet } from "react-router-dom";

const AlbumsPage = () => {
    return (
        <>
            <Content>
                <h2 style={{textAlign: "center"}}>Albums</h2>
                <Outlet/>
            </Content>
        </>
    )
}

export default AlbumsPage;