import React from 'react';
import { Row, Col  } from "reactstrap";
export default function LoginView({setToken}) { 
   
  return(
    <div className="pos">
    <div className="contenedor">
    <div className="contenidoCentrals">            
          <div className="contenidoLefts">                                    
              <div className="imasi">
                <img src={require("../../assets/img/login.png")}/>
              </div>              
          </div>
          
          <div className="contenidoRights">
            <Row>
              <Col md="12">   
                <div className="imerder">         
                  <img src={require("../../assets/img/gab2.png")}/>  
                </div>            
                <div className="imerdet">         
                    <h5>Gracias por registrarse !</h5>      
                    <h6>Revise su email, donde enviaremos los datos de acceso</h6>      
                    <div className="footer-unity mt-5">          
                    <img src={require("../../assets/img/logob.png")}/>
                    <p><b>Beggubo 'Gnu</b></p>
                    <p><a href="https://beggubo.com">www.beggubo.com</a></p>                          
                    </div>        
                </div>            
              </Col>                       
            </Row>
          </div>
      </div>  
    </div>
  </div>   
  )
}
