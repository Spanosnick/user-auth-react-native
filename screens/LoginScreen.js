import AuthContent from '../components/Auth/AuthContent';
import { Alert} from  'react-native';
import {useContext, useState} from "react";
import  {login} from '../util/auth';
import LoadingOverlay from  '../components/ui/LoadingOverlay';
import {AuthContext} from "../store/auth-context";

function LoginScreen() {
  const [isAuthenticating,setAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  async  function  loginHandler({email,password}){
    setAuthenticating(true);
    try {
     const token =  await  login(email,password);
      authCtx.authenticate(token)
     console.log(authCtx.i)
    }catch (error){
      Alert.alert('Login Failed','error')
      setAuthenticating(false);
    }


  }

  if (isAuthenticating){
    return <LoadingOverlay message={'Login Succesfull'} />
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
