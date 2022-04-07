import './App.css';
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from './firebase.init';
import { useState } from 'react';

function App() {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider()

  const [user, setUser] = useState({})

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)

      .then((result) => {

        const user = result.user;
        setUser(user)
        console.log(user);

      }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {

        const user = result.user;
        setUser(user)
        console.log(user);
        // ...
      }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  const handleSignOut = () => {
    setUser({})
  }

  return (
    <div className="App">
      {
        user.uid ? <button onClick={handleSignOut}>Sign Out</button> :
          <>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
            <button onClick={handleGithubSignIn}>Github Sign in</button>
          </>
      }


      <>
        <h2>Name:{user.displayName}</h2>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </>
    </div>
  );
}

export default App;
