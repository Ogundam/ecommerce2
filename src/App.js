import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './Loader';


const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const Signup = lazy(() => import('./Signup'));
const Verify = lazy(() => import('./Verify'));



function App() {
  return (
    <Suspense
      fallback={
        <Loader />
      }
    >







      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify/:id/:otp" element={<Verify />} />
      </Routes>
      </BrowserRouter>





    </Suspense>
  );
}

export default App