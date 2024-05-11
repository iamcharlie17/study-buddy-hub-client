import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext()


const AuthProviders = ({children}) => {

    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photoUrl) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        registerUser,
        updateUser,
        loginUser,
    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;