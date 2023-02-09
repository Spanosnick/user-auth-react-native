import  axios from 'axios';
const myAPIKEY = "AIzaSyCbXOuA655u_b8A2l8sKw_ofQB6us4xxDE";

async function authenticate(mode,email,password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${myAPIKEY}`;


   const response = await axios.post(url,{
        email:email,
        password:password,
       returnSecureToken:true,
    })

    const token = response.data.idToken;

    return token
}

export    function  createUser(email,password){
 return   authenticate('signUp',email,password)

}

export   function  login(email,password){
    return authenticate('signInWithPassword',email,password)

}