import React, { useState } from "react";
import Input from "../../components/input"
import Button from "../../components/button"
import * as C from "./style"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = ()=>{
    const [email,setEmail] = useState()
    const [emailConf,setEmailConf]  = useState()
    const [error,setError] = useState()

    const navigate = useNavigate();

    const { signup } = useAuth();

    const handleSignup = () =>{
        if(!email || !emailConf){
            setError("Preencha todos os campos")
        }else if(email !== emailConf){
            setError("Os dados dos campos estão diferentes!")
        }else{
        alert("Sua senha será enviada para seu email!");
        navigate("/");
        }
    }


    return(
        <C.Container>
            <C.Label>RECUPERAR CONTA</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e)=>[setEmail(e.target.value),setError("")]}
                />
                <Input
                    type="email"
                    placeholder="Confirme seu email"
                    value={emailConf}
                    onChange={(e)=>[setEmailConf (e.target.value),setError("")]}
                />
                <C.LabelError>{error}</C.LabelError>
                <Button Text="Recuperar senha" onClick={handleSignup}/>
                <C.Strong>
                    <Link to="/">&nbsp;Entre</Link>
                </C.Strong>
            </C.Content>
        </C.Container>
    )
}

export default Signup;