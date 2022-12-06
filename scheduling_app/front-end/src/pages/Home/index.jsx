import React from "react";
import Button from "../../components/button";
import * as C from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Home = ()=>{
    const navigate = useNavigate();

    if(sessionStorage.getItem("id")==null){
        navigate("/")
    }

    function destruirSessao(){
        sessionStorage.clear();
        navigate("/")
    }
    

    const [list,setList]=useState([])

    function dataAtualFormatada(dataT){
        return dataT.replace("T"," ");
    }

    useEffect(  ()=>{
        fetch("http://localhost:8080/agendamentos/user/"+sessionStorage.getItem("id"))
        .then( async result =>{
            setList( await result.json())
        })
    },[])

    const solicitarCancelamento = (id)=>{
        axios.delete("http://localhost:8080/agendamentos/"+id).then(response=>{
            if(response.status==204){
                window.document.location.reload(true)
                alert("Agendamento Cancelado com Sucesso!")
            }
        })
        
    }

    return(
        <C.Div>
            <C.Aside>
                <C.cabecalho>
                    <p>Dados da sessão:</p>
                    <span><strong>Usuário:</strong></span>
                    <p>{sessionStorage.getItem("name")}</p>
                    <span><strong>Função:</strong></span>
                    <p>{sessionStorage.getItem("funcao")}</p>
                    <span><strong>Registro Escolar:</strong></span>
                    <p>{sessionStorage.getItem("registro")}</p>
                </C.cabecalho>
                <C.options>
                <Button Text="Salas" onClick={()=>navigate("/principal")}/>
                <Button Text="Agendar" onClick={()=>navigate("/agendar")}/>
                <Button Text="Verificar Agenedamentos" onClick={()=>navigate("/agendamentos")}/>
                <Button Text="Sair" onClick={()=>destruirSessao()}/>    
                </C.options>
            </C.Aside>
            <C.Content>
                <h2>Meus agendamentos</h2>
            <div>
            <table>
        <thead>
            <tr>
                <th>ID Sala</th>
                <th>Bloco</th>
                <th>Número</th>
                <th>Tipo de Sala</th>
                <th>Descrição Sala</th>
                <th>Início</th>
                <th>Fim</th>
                
            </tr>
        </thead>
        <tbody>
            {
                list.map(({id,sala,user,inicio,fim})=>{
                    return <tr key={id}>
                        <td>{id}</td>
                        <td>{sala.bloco}</td>
                        <td>{sala.numero}</td>
                        <td>{sala.tipo}</td>
                        <td>{sala.descricao}</td>
                        <td>{dataAtualFormatada(inicio)}</td>
                        <td>{dataAtualFormatada(fim)}</td>
                        <td><Button Text="Cancelar" className="red" onClick={()=> solicitarCancelamento(id)}/></td>
                    </tr>
                })
            }
        </tbody>
    </table>
            </div>
            </C.Content>
        </C.Div>
        )

}

export default Home; 