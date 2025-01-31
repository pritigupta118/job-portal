import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Jobs from './components/Jobs';

const Home = lazy(() => import('./pages/Home'));
const Signup = lazy(() => import('./pages/Signup'));
const Login = lazy(() => import('./pages/Login'));
const Browse = lazy(() => import('./components/Browse'));

const AllRoutes = () => {
  return (
 <Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/browse" element={<Browse />} />
    <Route path="/jobs" element={<Jobs/>} />
  </Routes>
 </Suspense>
  )
}

export default AllRoutes
