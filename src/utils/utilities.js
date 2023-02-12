import { storeCookie, readCookie} from "../common";


export const login = async (username,email,password,setter,cookie) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}login`, {
            method:"POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }
            )
        })
        const data = await response.json();
        console.log(data);
        console.log(data.user);
        setter(data.user);

        storeCookie("jwt_token",data.token,7);
    } catch (error) {
        console.log(error)
    }
}

export const authCheck  = async (jwt_token) => {
    try {
        const response = await fetch (`${process.env.REACT_APP_REST_API_URL}authCheck`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${jwt_token}`
            }
        }
        )
        console.log(response);
        const data = await response.json();
        console.log("authCheck:",data);
        return data.user;
    } catch (error) {
        console.log(error)
    }
}

export const addUser = async (username,email,password,setter,cookie) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}addUser`, {
            method:"POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }
            )
        })
        const data = await response.json();
        console.log(data);
        console.log(data.user);
        setter(data.user);

        storeCookie("jwt_token",data.token,7);
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (username,email,password,setter,cookie) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API_URL}deleteUser`,{
          method: "DELETE",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify({
            username: username,
            email: email,
            password: password
          }
        )
      })
      const data = await response.json();
      setter(data.user);
      // console.log(data)
      storeCookie("jwt_token",data.token,7);
    } catch (error) {
      console.log(error)    
    }
  }
  
  export const listUsers = async (setUserList) => {
    let cookie = readCookie("jwt_token")
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API_URL}listUser`,{
          method: "GET",
          headers:{"Content-Type":"application/json",
                  "Authorization":`Bearer ${cookie}`}        
                  }
      )
        
      const data = await response.json();
      setUserList (data.user)
      console.log("listUsers",data.user)
  
    } catch (error) {
      console.log(error)    
    }
  
  }
  
  export const updateEmail = async (username,newEmail,password,setter,cookie) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API_URL}updateUser`, {
          method: "PUT",
          headers:{"Content-Type":"application/json",
                  "Authorization":`Bearer ${cookie}`},          
          body: JSON.stringify({
            username: username,
            email: newEmail,
            password: password
          }
        )
      })
      const data = await response.json();
      setter(data.user);
      // console.log(data)
      storeCookie("jwt_token",data.token,7);
    } catch (error) {
      console.log(error);   
    }
  }