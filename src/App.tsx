import './App.css'
import { Outlet } from "react-router-dom";
import { Menu } from "./components/menu/Menu";


function App() {

  return (
    <div>
      <Menu />
      This is App component
      <Outlet />
    </div>
  )
}

export default App
