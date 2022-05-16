import { usuarioService } from "../services";
import { history } from "../helpers";
import { toastr } from "react-redux-toastr";


export const usuarioActions = {  
  login,
  logout,
  demo
};
/*---------------------------------------------------------------*/
function demo(user) {
  return (dispatch) => {  
    dispatch({type:'SET_LOADING',state:true})  
    setTimeout(() => { 
         /** */
    usuarioService
    .demo(user)
    .then((response) => {                    
      if(response.message === "ok"){                     
        dispatch({type:'SET_LOADING',state:false})
        history.push("/success");
      }else{          
        dispatch({type:'SET_LOADING',state:false})
        toastr.error('Error', response.user.message)
      }              
    })
    .catch((err) => {          
      toastr.error('Error', err)
    });

   /** */
      }, 2000);
    
  };
}
function login(user) {
  return (dispatch) => {    
    usuarioService
      .login(user)
      .then((response) => {                    
        if(response.user.usuario){          
          dispatch({type:'LOGIN_SUCCESS'})                
            history.push("/inicio");                                        
        }else{          
          toastr.error('Error', response.user.message)
        }              
      })
      .catch((err) => {          
        toastr.error('Error', err)
      });
  };
}

function logout() {    
  return (dispatch) => {
    usuarioService.logout();
    dispatch({type:'LOGIN_LOGOUT'})
    history.push("/");
  };
}



/*---------------------------------------------------------------*/
