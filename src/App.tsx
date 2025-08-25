import './App.css'
import MyComponent from "./components/MyComponent.tsx";


function App() {

  return (
    <>
        < MyComponent title={'title 1 це батьківський комконент'} >
            Це children батьківського компонента
        </ MyComponent >
        < MyComponent title={'title 2'} />
        < MyComponent title={'title 3'} />
    </>
  )
}

export default App
