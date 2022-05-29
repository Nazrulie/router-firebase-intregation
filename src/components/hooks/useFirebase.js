import { useEffect, useState } from "react";
import app from "../../firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setuser] = useState({});


    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setuser(user)
                console.log(user)
            })
    }
    const handlesignOut = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setuser(user);
        })
    }, [])
    return {
        user
        ,
        singInWithGoogle
        ,
        handlesignOut
    }
}
export default useFirebase
