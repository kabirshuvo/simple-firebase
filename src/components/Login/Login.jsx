import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('google authe provider is getting ready')
    }



    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Login</button>
        </div>
    );
};

export default Login;