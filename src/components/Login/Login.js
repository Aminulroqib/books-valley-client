import React from 'react';
import Button from 'react-bootstrap/Button';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app(); // if already initialized, use that one
     }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                // ...
            });

    }
    return (
        <div>
            <h1>Login first</h1>
            <Button variant="outline-info" onClick={handleGoogleSignIn}>Google</Button>
        </div>
    );
};

export default Login;