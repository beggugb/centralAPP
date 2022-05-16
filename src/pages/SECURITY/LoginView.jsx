import React,{useState} from 'react';
import { Row, Form, FormGroup, Col, Button, Input, ButtonGroup  } from "reactstrap";
import { useDispatch } from 'react-redux'
import { usuarioActions } from '../../actions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";  
import ReCAPTCHA from "react-google-recaptcha";
export default function LoginView({setToken}) {
    const dispatch = useDispatch() 
    const [estado, setestado] = useState(false);
    const [user, setUser] = useState({
      nombres:"",      
      email:"",      
      telefono:"",
      estado:false,
      fecha: new Date(),
      isCajero : false,
      username:'nn'
    })
    const handleChange = (event,prop)=> {    
      console.log(event)
      console.log(prop)                    
                           
      setUser({      
          ...user,
          [prop]: event
      })  
    } 
  
    const submitHandle = event => {       
      event.preventDefault()                    
      dispatch(usuarioActions.demo(user))
      
   }
   const onChange = (value) => {                             
      setestado(true)
   }
   
  return(
    <div className="pos">
      <div className="contenedor">
      <div className="contenidoCentrals">            
            <div className="contenidoLefts">                                    
                <div className="imerp mt-5">
                  <img src={require("../../assets/img/erp.jpg")}/>
                </div>              
            </div>
            
            <div className="contenidoRights">
              <Row>
                <Col md="12">
                <div className="footer-unitys">          
                  <img src={require("../../assets/img/login.png")}/>            
                </div>
                </Col>                       
              </Row>
              <Row>
                <Col>
                  <div className="login"> 
                    <Form className="form-login" onSubmit={submitHandle}>
                    <h5>Solicita DEMO</h5>
                    <h6>Solicita el DEMO del Software y utilízalo con todas las funcionalidades, por 15 dias.</h6>
                    <FormGroup row>
                      <Col sm={2} className="io-blue">
                        <FontAwesomeIcon icon={faUser} />
                      </Col>
                      <Col sm={10}>
                        <Input
                          type="text"
                          name="nombre"
                          id="nombre"
                          value={user.nombres}
                          placeholder="nombres"
                          onChange={(e)=> handleChange(e.target.value,"nombres")}
                          onInvalid={(e) => e.target.setCustomValidity('campo necesario !!')}
                          onInput={(e) => e.target.setCustomValidity('')}
                          required
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={2} className="io-blue">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </Col>
                      <Col sm={10}>
                      <Input
                          type="email"
                          name="email"
                          id="email"
                          value={user.email}
                          placeholder="email"
                          onChange={(e)=> handleChange(e.target.value,"email")}
                          onInvalid={(e) => e.target.setCustomValidity('el campo debe ser un email !!')}
                          onInput={(e) => e.target.setCustomValidity('')}
                          required
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={2} className="io-blue">
                        <FontAwesomeIcon icon={faPhone} />
                      </Col>
                      <Col sm={10}>
                      <Input
                          type="text"
                          name="telefono"
                          id="telefono"
                          value={user.telefono}
                          placeholder="telefono"
                          onChange={(e)=> handleChange(e.target.value,"telefono")}
                          onInvalid={(e) => e.target.setCustomValidity('campo necesario !!')}
                          onInput={(e) => e.target.setCustomValidity('')}
                          required
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={2} className="io-blue">  </Col>
                      <Col sm={10} className="captcha" style={{transform:"scale(0.85)", transformOrigin:"0 0"}}>
                      <ReCAPTCHA
                        sitekey="6LdX78YUAAAAACK2C0Arjfgs95Vy0jTIHoqAd5vZ"
                        onChange={onChange}
                        
                    />,
                      </Col>
                    </FormGroup>
                      <div className="button-container">
                        <ButtonGroup>
                          <Button type="submit" className={estado  ? "btn-infos btn-md": "btn btn-infos disabled btn-md " }>
                            <FontAwesomeIcon icon={faLock} />
                            {' '} Solicitar
                          </Button>
                        </ButtonGroup>
                      </div>            
                    </Form>
          </div>
        </Col>
      </Row>

      
      
      
    
            </div>
        </div>  
      </div>
    </div>    
  )
}
