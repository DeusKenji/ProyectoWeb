import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Productos from './components/pages/Productos';
import Promociones from './components/pages/Promociones';
import Home from "./components/pages/Home";
import CDU from "./components/pages/CDU";
import {useState} from "react";

function App() {

    const setLocalMode = ()=>{
        try {
            setModoDia(!modoDia)
            window.localStorage.setItem('modoDia', modoDia)
        }catch (error){
            console.error(error)
        }
    }
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [modoDia, setModoDia] = useState(window.localStorage.getItem('modoDia'))

  return (
    <Router>
      <Sidebar modoDia={modoDia} setLocalMode={setLocalMode} sidebar={sidebar} showSidebar={showSidebar}/>
      <Switch>
          <Route path='/' exact ><Home modoDia={modoDia}/></Route>
          <Route path='/productos' exact component={Productos} />
          <Route path='/productos/promociones' exact component={Promociones} />
          <Route path='/CentroDeUsuario' exact><CDU modoDia={modoDia}/></Route>
      </Switch>
    </Router>
  );
}

export default App;
