import './App.css';
import Home from './pages/Home';
import Single from './pages/Single';
import List from './pages/List';
import Login from './pages/Login';
import New from './pages/New';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import { productInputs, userInputs } from './formSource';
import './style2/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext"


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element = {<Home/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='users'>
            <Route index element = {<List/>}/>
            <Route path=':userId' element = {<Single/>}/>
            <Route path='new' element = {<New inputs={userInputs} title="Add New User"/>}/>
          </Route>
          <Route path='products'>
            <Route index element = {<List/>}/>
            <Route path=':productId' element = {<Single/>}/>
            <Route path='new' element = {<New inputs={productInputs} title="Add New Product"/>}/>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    

    
      
  );
}

export default App;
