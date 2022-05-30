import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';


const auth = getAuth(app)

const Login = () => {
    const [signInwithGoogle] = useSignInWithGoogle(auth)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInwithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            <h1>please login</h1>
            <div style={{ margin: '10px' }}>
                <button onClick={handleGoogleSignIn}>Google sign in</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;