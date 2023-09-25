import { Routes, Route, Outlet, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Profile from "./components/Profile/index.jsx";
import SignIn from "./components/SignIn/index.jsx";
import SignUp from "./components/SignUp/index.jsx";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
