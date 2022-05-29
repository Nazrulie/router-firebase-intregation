import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const { singInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>please login</h3>
            <div style={{ margin: '10px' }}>
                <button onClick={singInWithGoogle}>Google sign in</button>
            </div>
            <br />
            <form >
                <input type="email" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;