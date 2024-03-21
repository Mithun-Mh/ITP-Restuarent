import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
//github
import AddRestaurants from './pages/restaurants/AddRestaurants';
import ShowRestuarant from './pages/restaurants/ShowRestuarant';
import UpdateRestuarant from './pages/restaurants/UpdateRestaurants';
import DeleteRestuarant from './pages/restaurants/DeleteRestuarant';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/restuarant/create' element={<AddRestaurants />} />
      <Route path='/restuarant/details/:id' element={<ShowRestuarant />} />
      <Route path='/restuarant/edit/:id' element={<UpdateRestuarant />} />
      <Route path='/restuarant/delete/:id' element={<DeleteRestuarant />} />
      </Routes>
    </BrowserRouter>
  );
}
