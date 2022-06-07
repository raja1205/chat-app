import React from 'react'
import { auth } from '../firebase.js'
import '../index.css';

function SignOut() {

	return (
		 <div className="chats-page">
			<div className="nav-bar">
				<div className="logo-tab">Chat App</div>
				<div className="logout-tab" onClick={() => auth.signOut()}>Sign Out</div>
			</div>
        </div>
    )
}

export default SignOut;