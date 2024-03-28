import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Appbar from './components/Appbar';
import BlogPage from './components/BlogPage';
import Login from './components/Login';
import BlogPost from './components/BlogPost';
import Registration from './components/Registration';
import AuthContextProvider from './contexts/AuthContext';
import Profile from './components/Profile';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Appbar />
          <Routes>
            <Route path='/' element={<BlogPage/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='registration' element={<Registration/>}/>
            <Route element={<PrivateRoute />} >
              <Route path='/post' element={<BlogPost/>} />
              <Route path='/profile' element={<Profile/>}/>
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
