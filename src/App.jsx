import './App.css'
import Menu from './component/Menu'
import Sidebar from './component/Sidebar'

function App() {
  

  return (
    <div className=' w-11/12 mx-auto xl:grid grid-cols-3'>
      <Sidebar></Sidebar>
      <Menu></Menu>
    </div>
  )
}

export default App
