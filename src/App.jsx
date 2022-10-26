import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Mission from "./pages/Mission";
import Team from "./pages/Team";
import Join from "./pages/Join";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Join />}/>
            <Route path='/mission' element={<Mission />}/>
            <Route path='/team' element={<Team />}/>
        </Routes>
    </BrowserRouter>
  );
}
