
import PostsList from "./features/posts/PostList";
import AddPostForm from "./features/posts/AddPostForm";
import {Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout";
import SinglePostPage from "./features/posts/SinglePostPage";
function App() {
    return(
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index path="/" element={<PostsList />} />
                <Route path="post">
                    <Route index element={<AddPostForm/>} />
                    <Route path=":postId" element={<SinglePostPage />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App;
