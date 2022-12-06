import React, { useEffect, useState } from "react";
import "./style.css"


function dataAtualFormatada(dataT){
    return dataT.replace("T"," ");
}

function Registers({list = []}){
    return <table>
        <thead>
            <tr>
                <th>ID Sala</th>
                <th>Bloco</th>
                <th>Número</th>
                <th>Tipo de Sala</th>
                <th>Descrição Sala</th>
                <th>Usuário</th>
                <th>Função</th>
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
                        <td>{user.name}</td>
                        <td>{user.funcao}</td>
                        <td>{dataAtualFormatada(inicio)}</td>
                        <td>{dataAtualFormatada(fim)}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
}

const Content = ()=>{
    const [list,setList]=useState([])

    useEffect(  ()=>{
        fetch("http://localhost:8080/agendamentos")
        .then( async result =>{
            setList( await result.json())
        })
    },[])

    return(
        <div className="agendamentos">
            <h2>Agendamentos</h2>
            <Registers list={list}/>
        </div>
    )
}

export default Content