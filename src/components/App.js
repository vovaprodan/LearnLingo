import { Routes, Route, NavLink } from "react-router-dom";

import css from './App.module.css';
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/HomePage"));
const Teachers = lazy(() => import("./pages/TeachersPage"));
const Favorite = lazy(() => import("./pages/FavoritesPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div className={css.app}>
      <nav className={css.nav}>
        <NavLink className={({isActive}) => (isActive ? css.linkActive : css.link )} to='/' >Home</NavLink>
        <NavLink className={({isActive}) => (isActive ? css.linkActive : css.link )} to='/teachers' >Teachers</NavLink>
        <NavLink className={({isActive}) => (isActive ? css.linkActive : css.link )} to='/favorites' >Favorites</NavLink>
      </nav>
       <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/teachers" element={<Teachers />} ></Route>
        <Route path="/favorites" element={<Favorite/>} />
        <Route path="*" element={<NotFound/>} />
        </Routes>
        </Suspense>
    </div>
  );
}

export default App;
