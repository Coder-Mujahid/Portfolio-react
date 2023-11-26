import { Outlet } from 'react-router-dom'
import './App.css'
import Menu from './component/Menu'
import Sidebar from './component/Sidebar'

function App() {
  

  return (
    <div className=' w-11/12 mx-auto xl:grid grid-cols-3'>
      <Sidebar></Sidebar>
      <div  className='col-span-2'>
        <Menu></Menu>

        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
