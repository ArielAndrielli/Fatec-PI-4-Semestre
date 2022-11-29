import { Fragment } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "../pages/Home"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"
import Inicio from "../pages/Inicio"
import Agendamentos from "../pages/Agendamentos"
import Agendar from "../pages/Agendar"

const RoutesApp = ()=>{
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Home/>}/>
                    <Route exact path="/principal" element={<Inicio/>}/>
                    <Route exact path="/agendamentos" element={<Agendamentos/>}/>
                    <Route exact path="/agendar" element={<Agendar/>}/>
                    <Route path="/" element={<Signin/>}/>
                    <Route exact path="/signup" element={<Signup/>}/>
                    <Route path="*" element={<Signin/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;