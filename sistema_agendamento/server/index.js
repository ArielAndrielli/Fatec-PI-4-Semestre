const axios = require("axios")
const express = require("express");
const app = express();


app.listen(3001,()=>{
    console.log("Rodando Servidor")
})

axios.get("http://localhost:8080/users").then(function (response){
    console.log(response.data[0].senha)
})
.catch(function (error){
    console.log(error)
})