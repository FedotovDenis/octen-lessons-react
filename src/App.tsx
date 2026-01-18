import './App.css'
import { PaginationComponent } from './components/pagination/PaginationComponent'
import { UsersComponent } from './components/users/UsersComponent'

export const App = () => {

  return (
    <>
      <UsersComponent />
      <h1>Pagination Demo</h1>
      <PaginationComponent />
    </>
  )
}
