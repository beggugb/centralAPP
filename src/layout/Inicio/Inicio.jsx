import React from "react";

import { Route, Switch } from "react-router-dom";
import InicioView from "../../pages/HOME/InicioView"
import FichaView from "../../pages/HOME/FichaView"
function Post(){
return(
    <Switch>
        <Route path="/inicio/" component={InicioView}/>                        
    </Switch>
)    
}
export default Post;
