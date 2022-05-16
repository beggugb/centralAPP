import React from "react";
import { Route, Switch } from "react-router-dom";
import SuccessView from "../../pages/SECURITY/SuccessView.jsx"
function Post(){
return(
    <Switch>        
        <Route path="/success/" component={SuccessView}/> 
    </Switch>
)    
}
export default Post;
