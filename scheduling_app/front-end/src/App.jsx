import React from "react";
import GlobalStyle from "./styles/global";
import RoutesApp from "./routes/index"
import {AuthProvider} from "./contexts/Auth"

function App(){
    return(
        <>
            <RoutesApp/>
            <GlobalStyle/>
        </> 
    )
}


export default App;