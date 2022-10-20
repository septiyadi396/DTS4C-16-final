import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./base"

export const signingUp = async (email, password) => {
    try {
        const userSignUp = await createUserWithEmailAndPassword(auth, email, password)
        return userSignUp
    } catch (error) {
        console.log('error sign up', error.message);
        return error
    }
}
