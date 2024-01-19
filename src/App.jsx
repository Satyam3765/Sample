import "bootstrap/dist/css/bootstrap.min.css";
import Homes from "./pages/home/Home";
import Header from "./pages/subComponents/header/header";
import Footer from "./pages/subComponents/footer/Footer";
import Logins from "./pages/login/Login";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/details/Details";
import Registers from "./pages/register/Register";
export var base_url = "";
export const base = base_url;

function App() {

return (
<div>
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Registers />} />
            <Route path="/login" element={<Logins />} />
            <Route path="/home" element={<Homes />} />
            <Route path="/:mediaType/:id" element={<Details />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
</div>
);
}

export default App;