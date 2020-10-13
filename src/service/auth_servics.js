import firebase from "firebase";
import firebaseApp from "./firebase"

class AuthServics {
    login(providerName){
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
}

export default AuthServics;