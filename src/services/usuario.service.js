import { api } from "../helpers";

export const usuarioService = {  
  login,
  logout,
  demo  
};

function demo(dato) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dato),
  };
  return fetch(`${api}/usuarios/demo`, requestOptions).then(handleResponse);
}



function login(usuario) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  };

  return fetch(`${api}/usuarios/login`, requestOptions)
    .then(handleResponse)
    .then((response) => {          
 
      if(response.user.usuario){
       
        localStorage.setItem("@userUnitys", JSON.stringify(response.user.usuario));
        localStorage.setItem("@userTokens", JSON.stringify(response.user.token));        
      }  
      return response;
    });
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        //location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function logout() {
  localStorage.removeItem("@userUnitys");
  localStorage.removeItem("@userTokens");  
  localStorage.removeItem("@userEmpresa");
}

