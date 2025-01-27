import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';



const Home = lazy(() => import('./pages/Home'));
const Signup = lazy(() => import('./pages/Signup'));
const Login = lazy(() => import('./pages/Login'));

const AllRoutes = () => {
  return (
 <Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
  </Routes>
 </Suspense>
  )
}

export default AllRoutes
