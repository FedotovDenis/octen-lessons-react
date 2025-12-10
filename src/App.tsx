import "./App.css"
import {TodosComponent} from "./components/todos-component/TodosComponent.tsx";
import {PostsComponent} from "./components/posts-component/PostsComponent.tsx";
import {CommentsComponent} from "./components/comments-component/CommentsComponent";




function App() {

  return (
      <>
          <PostsComponent/>
          <TodosComponent/>
          <CommentsComponent/>
      </>
  )
}

export default App