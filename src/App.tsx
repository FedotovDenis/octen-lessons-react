import './App.css'
import { useEffect } from 'react'
import { getAllUsers, saveUser } from './service/user.service'


function App() {

  useEffect(() => {
    getAllUsers().then(users => console.log(users))
    saveUser({ id: 1, name: 'John Doe', email: 'john.doe@example.com', }).then(value => console.log(value))

  }, [])
  return (
    <>

    </>
  )
}

export default App
