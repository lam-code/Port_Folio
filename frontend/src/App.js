import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import Topbar from './components/topbar/Topbar';
import Header from './components/Header/Header';
import CV from './components/cv/CV';
import Article from './components/Article/Article';
import Admin from './pages/admin/Admin';


function App() {
  // *********afficher ou cacher le login admin*******
  const admin = false;
  return (
<Router>
  <Topbar />
  <Header />      
  <Routes>
  
    <Route path='/' element={<Home />}></Route>
    <Route path='/moncv' element={<CV/>}></Route>
    <Route path='/projects' element={<Article />}></Route>
    <Route path='/contact' element={admin ? <Home />:<Admin />}></Route>


  </Routes>

</Router>
  )
}

export default App;
