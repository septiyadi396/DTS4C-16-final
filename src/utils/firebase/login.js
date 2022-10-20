import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./base"

export const signingIn = async (email, password) => {
    try {
        const userSignIn = await signInWithEmailAndPassword(auth, email, password)
        return userSignIn
    } catch (error) {
        console.log('error sign in', error.message);
        return error
    }
}
