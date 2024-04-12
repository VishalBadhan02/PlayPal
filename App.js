import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import AuthHeader from "./layouts/authheader";
import AuthFooter from "./layouts/authFooter"
import Login from './components/login';



function App() {
  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
