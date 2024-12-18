import { auth } from "../firebase/firebase.init"
import AuthContext from "./AuthContext"
import { useAuthState, useSignInWithEmailAndPassword,useCreateUserWithEmailAndPassword, useSignOut, useSignInWithGoogle} from "react-firebase-hooks/auth";
import { useContext } from "react";




export const AuthProvider = ({children})=>{

    const[user, loading, error] = useAuthState(auth)
    const [signInWithEmailAndPassword, , signInLoading, signInError] = useSignInWithEmailAndPassword(auth);
    const [createUserWithEmailPassword, userCreated, userCreationError] = useCreateUserWithEmailAndPassword(auth);
    const [signOut, signOutLoading, signOutError] = useSignOut(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] =useSignInWithGoogle(auth);



    const userInfo = {
        user,
        loading,
        error,
        signInWithEmailAndPassword,
        signInLoading,
        signInError,
        createUserWithEmailPassword,userCreated,userCreationError,
        signOut,
        signInWithGoogle,googleError
    }


    return(
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>useContext(AuthContext)