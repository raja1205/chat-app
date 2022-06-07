import React from 'react';
import firebase from 'firebase'
import { auth } from '../firebase.js'
import { GoogleOutlined } from '@ant-design/icons'; //@4.6.2
//import { FacebookOutlined } from '@ant-design/icons';


function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div id="login-page">
			<div id="login-card">
			<h2>Welcome to Chat App</h2>
				<div className="login-button google" onClick={signInWithGoogle}>
					<GoogleOutlined /> Sign In with Google
				</div>
			</div>
        </div>
    )
}

export default SignIn;



/*
				<div className="login-button facebook">
					<FacebookOutlined /> Sign In with Facebook
				</div>

*/
