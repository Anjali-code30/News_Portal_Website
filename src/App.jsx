import {Routes , Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import NewsDetails from './pages/NewsDetails';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
//  import Loader from './components/Loader';

function App(){
    return(
        <>
        <Navbar/>
        {/* <Loader/> */}
        <Routes>
            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/news/:id" element={<NewsDetails/>} ></Route>
            <Route path = "/about" element = {<About/>}></Route>
            <Route path = "/contact" element = {<Contact/>}></Route>
            <Route path = "*" element = {<NotFound/>}></Route>

        </Routes>
        <Footer/>
        <ToastContainer/>
        </>
    );
}
export default App;