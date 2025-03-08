import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard'
import AdminMenu from './pages/AdminMenu';
import AdminItems from './pages/AdminItems';
import { ToastContainer } from 'react-toastify'

export const backendUrl = `http://localhost:5000`;

function App() {

  return (
    <div className='teko-font'>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Menu />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/home/:adminEmail' element={<Home />} />
          <Route path='/:adminEmail' element={<Menu />} />
          <Route path='/reservation/:adminEmail' element={<Reservation />} />
          <Route path='/contact/:adminEmail' element={<Contact />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/admin-dashboard/:adminEmail' element={<AdminDashboard />} />
          <Route path='/admin-menu/:adminEmail' element={<AdminMenu />} />
          <Route path='/admin-items/:adminEmail' element={<AdminItems />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
