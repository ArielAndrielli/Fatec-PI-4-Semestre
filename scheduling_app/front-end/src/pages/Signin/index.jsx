import React, {useState} from "react";
import Input from "../../components/input"
import Button from "../../components/button"
import * as C from "./style"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"
import axios from "axios";

const Signin = ()=>{
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [error,setError] = useState("");


    const handleLogin = ()=>{
        if(!email || !senha){
            setError("Preencha todos os campos!")
        }else{
            axios.post("http://localhost:8080/login",{
            userName:email,
            password:senha
            }).then(response=>{
                if(response.status==200){
                    sessionStorage.clear()
                    sessionStorage.setItem("name",response.data.name)
                    sessionStorage.setItem("registro",response.data.registroEscolar)
                    sessionStorage.setItem("funcao",response.data.funcao)
                    sessionStorage.setItem("id",response.data.id)
                    navigate("/home")
                }
            }).catch(function(error){
                setError("Credenciais inválidas!")
            })
            
        }
        
    }

    return (
        <C.Container>
            <C.Label>SISTEMA DE AGENDAMENTOS</C.Label>
            <C.Content>
                <Input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e)=> [setEmail(e.target.value),setError(" ")]}
                />
                <Input
                type="password"
                placeholder="Digite sua Senha"
                value={senha}
                onChange={(e)=> [setSenha(e.target.value),setError(" ")]}
                />
                <C.LabelError>{error}</C.LabelError>
                <Button Text="Entrar" onClick={handleLogin}/>

                <C.LabelSignup>
                    Esqueceu a senha?
                    <C.Strong>
                        <Link to="/signup">&nbsp;Recupere sua conta</Link>
                    </C.Strong>
                </C.LabelSignup>
            </C.Content>
        </C.Container>
    )
}

export default Signin;