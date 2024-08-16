import {React} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";



function Routing() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login /> } />
            <Route exact path="/register" element={<Register /> } />
        </Routes>
    );
}
export default Routing;

