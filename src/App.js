import './App.css';
import AllRoutes from './AllRoutes';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from './Pages/Footer/Footer';
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users'
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <AllRoutes/>
     <Footer/>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
