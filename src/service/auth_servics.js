import firebase from "firebase";

class AuthServics {
    login(providerName){
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebase.auth().signInWithPopup(authProvider);
    }
}

export default AuthServics;