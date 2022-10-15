import { Provider } from "react-redux";
import { store } from "./store";

import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"

import PostsPage from "./pages/PostsPage";
import AlbumsPage from "./pages/AlbumsPage";
import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";

import AlbumsListContainer from "./containers/albums-list-container/AlbumsListContainer";
import SliderContainer from "./containers/slider-container/SliderContainer";
import CreatePostContainer from "./containers/create-post-container/CreatePostContainer";
import EditPostContainer from "./containers/edit-post-container/EditPostContainer";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>

                    <Route path="/posts" element={<PostsPage/>}>
                        <Route path="create" element={<Modal><CreatePostContainer/></Modal>}/>
                        <Route path="edit/:id" element={<Modal><EditPostContainer/></Modal>}/>
                    </Route>
                    
                    <Route path="/albums" element={<AlbumsPage/>}>
                        <Route path="" element={<AlbumsListContainer/>}/>
                        <Route path=":id" element={<SliderContainer/>}/>
                    </Route>
                    
                    <Route path="/todos" element={<TodosPage/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </Provider>
    )
}

export default App;