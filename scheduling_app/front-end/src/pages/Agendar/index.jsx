import React, { useState } from "react";
import AsyncSelect from "react-select/async"
import axios from "axios";
import Button from "../../components/button";
import "./style.css"

const Form = ()=>{

    const [itens,setItems]=useState([]);
    const [inputValue,setValue]=useState('');
    const [selectedValue,setSelectedValue] = useState(null);
    const [mensagem,setMensagem] = useState("");

    const handleInputChange = value =>{
        setValue(value)
    }

    const handleChange = value =>{
        setSelectedValue(value) 
        
    }

    const handleOption = e =>{
        return <p><strong>BLOCO: </strong>{e.bloco}<strong> NÚMERO: </strong>{e.numero}<strong> TIPO: </strong>{e.tipo}<strong> DESCRIÇÃO: </strong>{e.descricao}</p>
    }

    const realizarAgendamento = ()=>{
        setMensagem("")
        if (selectedValue==null){ 
            setMensagem("Necessário selecionar uma sala para realizar o agendamento")
             return null;
        }
        const sala = selectedValue.id;
        
        let user = 1
        let start = document.getElementById("inicio").value
        let end = document.getElementById("fim").value
        
        axios.post("http://localhost:8080/agendamentos",{
            salaID: sala,
            userID: user,
            inicio: start,
            fim: end
        })
        .then(function (response) {
            setMensagem("Agendamento realizado com sucesso, verifique na tela inicial seus agendamentos!")
        })
        .catch(function(error){
            if(error.response.status==500)
                setMensagem("Não foi possível solicitar o agendamento, verifique se todas as informações foram preenchidas e tente novamente!")
        })

    }

    const fetchData = ()=>{
       return axios.get("http://localhost:8080/salas")
       .then(result =>{
        const res = result.data;
        //console.log(res)
        return res;
       })
    }

    return(
        <div className="form">
            <h2>Realizar Agendamento</h2>
            <AsyncSelect
            cacheOptions
            defaultOptions
            value={selectedValue}
            getOptionLabel={handleOption}
            getOptionValue={e => e.id}
            loadOptions={fetchData}
            onInputChange={handleInputChange}
            onChange={handleChange}
            placeholder="Selecione uma sala"
            required
            />
            <input type="datetime-local" id="inicio"/>
            <input type="datetime-local" id="fim"/>
            <Button Text="Realizar Agendamento" onClick={realizarAgendamento}/>
            <p>{mensagem}</p>
        </div>
    )
}

export default Form