import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App(){
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/about" element = {<About/>}></Route>
            <Route path = "/contact" element = {<Contact/>}></Route>
            <Route path = "*" element = {<NotFound/>}></Route>

        </Routes>
        </>
    );
}
export default App;