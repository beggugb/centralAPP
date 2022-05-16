import React from 'react';
import "./assets/css/erp.css";
import { Router , Route, Switch, Redirect } from 'react-router-dom'
import PostLayout from './layout/Post/Post.jsx'
import SuccessLayout from './layout/Post/Success.jsx'
import { Provider } from "react-redux";
import { store, history } from "./helpers";
import ReduxToastr from 'react-redux-toastr'

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

function App() {
  
  return (    
      <Provider store={store}>  
       <ReduxToastr
        timeOut={1100}
        newestOnTop={false}
        preventDuplicates
        progressBar={true}
        position="top-center"
        getState={(state) => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"        
        closeOnToastrClick/>   
        <Router history={history}>
          <Switch>      
            <Route
              exact
              path="/login"
              render={(props) => <PostLayout {...props} />}
            />        
               
            <Route
              exact
              path="/"
              render={() => <Redirect to="/inicio/dashboard" />}
            />        
            <Route
              exact
              path="/inicio"
              render={() => <Redirect to="/inicio/dashboard" />}
            />            
            <Route
              exact
              path="/success"
              render={(props) => <SuccessLayout {...props} />}
            />                                     
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
