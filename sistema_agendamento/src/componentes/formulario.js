import React from 'react';
import { useState } from 'react';
import './formulario.css'

function Form(){
    const [values,setValues] = useState();

    const handleValues = (value)=>{
        setValues((prevValue)=>({
            ...prevValue,
            [value.target.name]:value.target.value,
        }))
    }

    const onHandleClickButton = ()=>{
        console.log(values)
    }

    
    return (
        <div className="tela-principal">
            <form>
                <h1>Bem-vindo!</h1>
                <p>Usuário</p>
                <input type="text" placeholder="Digite seu nome de usuário" name="usuario" onChange={handleValues} required/>
                <p>Senha</p>
                <input type="password" placeholder="Digite sua senha" name="senha" onChange={handleValues}required/>
                <input type="submit" value="ENTRAR" name="entrar" onClick={()=>onHandleClickButton()}/>
            </form>
            <div className="descricao">
            </div>
        </div>
    )
}

export default Form;