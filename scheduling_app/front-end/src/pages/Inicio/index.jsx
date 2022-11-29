import React, { useEffect, useState } from "react";
import "./style.css"

function Registers({list = []}){
    return <table>
        <thead>
            <tr>
                <th>ID Sala</th>
                <th>Bloco</th>
                <th>Número</th>
                <th>Tipo de Sala</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(({id,bloco,numero,tipo,descricao})=>{
                    return <tr key={id}>
                        <td>{id}</td>
                        <td>{bloco}</td>
                        <td>{numero}</td>
                        <td>{tipo}</td>
                        <td>{descricao}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
}

const Content = ()=>{
    const [list,setList]=useState([])

    useEffect(  ()=>{
        fetch("http://localhost:8080/salas")
        .then( async result =>{
            setList( await result.json())
        })
    },[])

    return(
        <div className="salas">
            <h2>Salas Disponiveis no Sistema</h2>
            <Registers list={list}/>
        </div>
    )
}

export default Content