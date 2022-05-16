import React from "react";
import { css } from "@emotion/react";
import {  useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import LoginView from "../../pages/SECURITY/LoginView.jsx"
import MoonLoader from "react-spinners/MoonLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Post(){    
    const { loading }= useSelector(state => state.usuarios)
    return(
    
    <>
    <Modal isOpen={loading} className="cargas">          
        <ModalBody className="carga">
        <MoonLoader color="#1fa2f2" loading={loading} css={override} size={30} />                
        </ModalBody>
    </Modal>
    <Switch>
        <Route path="/login/" component={LoginView}/>                
    </Switch>
    </>
)    
}
export default Post;
