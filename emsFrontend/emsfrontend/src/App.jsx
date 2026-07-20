import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>

          {/* //localhost:3000 */}
          <Route path='/' element = { <ListEmployeeComponents /> }></Route>

          {/* //localhost:3000/employees */}
          <Route path='/employees' element = { <ListEmployeeComponents /> }></Route>
          
        </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
