import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>Knock knock ! Who is ther </h2>
            <h4>{user ? user.displayName : 'bhoot'}</h4>
        </div>
    );
};

export default Products;