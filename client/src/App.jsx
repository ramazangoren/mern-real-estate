import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from './pages/Home'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/listing/:listingId" element={<Listing/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>}></Route>
        </Route>
        <Route path="/create-listing" element={<CreateListing/>}></Route>
        <Route path="/update-listing/:listingId" element={<UpdateListing/>}></Route>
      </Routes>
    </>
  );
}

export default App;
