import { storeCookie } from "../common";


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

// export const listUsers = async (setter, jwt_token) => {
//     try { 
//         const response = await fetch(`${process.env.REACT_APP_REST_API_URL}listUsers', {
//             method: "GET", 
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization" : `Bearer ${jwt_token}`
//             }
//         }); 

//         const data = await response.json(); 
//         console.log(data.users)
//         setter(data.users)
//     } catch (error) {
//         console.log(error)
//     }
// }

export const updateEmail = async (username, email, password, jwt_token, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}updateUser`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"},
            "Authorization" : `Bearer ${jwt_token}`,
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    });
        const data = await response.json();
        console.log(data);
        console.log(data.user);
        setter(data.user);
    } catch(error) {
        console.log(error);
    }
}