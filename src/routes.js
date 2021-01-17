import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Form from "./componentes/Form";
import Listagem from "./componentes/Listagem";
import FormAlterar from "./componentes/FormAlterar";
import Consultar from "./componentes/consulta";

function Routes(){

return(
   <BrowserRouter>
   <Switch>
   <Route exact  path="/"  component={Consultar}></Route>
   <Route path="/clientes"   component={Listagem}></Route>
   <Route path="/alterar" component={FormAlterar}>
    <Route path="/:id" component={FormAlterar}></Route>
   </Route>
   <Route   path="/cadastrar"  component={Form}></Route>
   </Switch>
   </BrowserRouter>
  
);


}
export default Routes;