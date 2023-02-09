import {useContext , useState} from  'react';
import { Alert} from  'react-native';
import AuthContent from '../components/Auth/AuthContent';
import  {createUser} from '../util/auth';
import LoadingOverlay from  '../components/ui/LoadingOverlay';

function SignupScreen() {
   const [isAuthenticating,setAuthenticating] = useState(false);
   const authCtx = useContext(AuthContent);

  async  function  signupHandler({email,password}){
    setAuthenticating(true);
  try {
    const token = await createUser(email,password);
    authCtx.authenticate(token)
  }catch (err){
      Alert.alert('Problem');
      // setAuthenticating(false);
  }

  }



  if (isAuthenticating){
    return <LoadingOverlay message={'Loading'} />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
