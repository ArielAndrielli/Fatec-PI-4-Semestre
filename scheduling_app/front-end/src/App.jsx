import React from "react";
import globalStyle from "./styles/global";
import RoutesApp from "./routes/index"
import {AuthProvider} from "./contexts/Auth"

function App(){
    return(
        <AuthProvider>
            <RoutesApp/>
            <globalStyle/>
        </AuthProvider>
    )
}


export default App;