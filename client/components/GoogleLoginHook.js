import React, { useRef, useEffect, useState } from 'react';
import { useGoogleLogin } from 'react-google-login';
import GoogleLogin from 'react-google-login';
import refreshTokenSetup from '../../auth_tok/refreshTokenSetup';


const clientId = process.env.CLIENT_ID;
console.log('clientID', clientId);
console.log('env file', process.env.CLIENT_ID);
// function GoogleLoginHook() {
//   const onSuccess = (res) => {
//     console.log('Login successful: currentuser: ', res.profileObj);
//     refreshTokenSetup(res);
//   };

//   const onFailure = (res) => {
//     console.log('Login failed: res: ', res);
//   };



//     const divRef = useRef(null);

// useEffect(() => {
//   if (divRef.current) {
//     window.google.accounts.id.initialize({
//       client_id: CLIENT_ID,
//     //   callback: (res, error) => {
//     //     // This is the function that will be executed once the authentication with google is finished
//     //       onSuccess(res);
//       callback: signIn,
//     });
//     window.google.accounts.id.renderButton(divRef.current, {
//         theme: 'filled_blue',
//         class: 'g_id_signin',
//       size: 'medium',
//       type: 'standard',
//         text: 'continue_with',
//       shape: 'rectangular',
//     });
//   }
// }, [divRef.current]);

//   return (
//     <button onClick={signIn} className="button">
//       <span className="buttonText">Give me the last four of your social</span>
//       {/* <div ref={divRef} /> */}
//     </button>
//   );
// }

// profileObj looke like this
// profileObj {
//  email:
//  familyName:
//  givenName;
//  googleId:
//  imageUrl:
//  name:
// }
//
const GoogleLoginHook = () => {
// implement the useState hooke and set inital state to null
  const [user, setUser] = useState(null);
// create a async function being triggered when log in is successful
  const onSuccess = async (res) => {
    try {
      const { profileObj } = res;
      console.log('Login successful: currentuser: ', profileObj);
      const { email, name, imageUrl } = profileObj;
// create a user obj with information from profile and use make it the going to be updated state
      const user = { email, name, imageUrl };
      setUser(user);
// create a cookie to store the user email
      document.cookie = 'email=' + email.split('@')[0];
// ?? ;\
      await refreshTokenSetup(res);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  //         const res = await fetch('/', {
  //             method: 'POST',
  //             body: JSON.stringify({
  //                 token: res.tokenId,
  //             }),
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },
  //         });
  //         const {user, token} = await res.json();
  //         console.log('Login successful: currentuser: ', user);
  //         localStorage.setItem('token', token);
  //         setUser(user);
  //         refreshTokenSetup(res);
  //     } catch(err) {
  //         console.log('Error: ->:::::', err);
  //     }
  // };

// if oauth unsuccessful then print out error
  const onFailure = (res) => {
    console.log('Login failed: res: ', res);
  };

// not sure, need to go more into doc
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  
  return (
    <div id="sign-in">
  
      {!user && <GoogleLogin clientId={clientId} onSuccess={onSuccess} />}
      {user && (
        <div id = "welcome-note">
          <p>Welcome to NBA-List, {user.name}</p>
          <img src={user.imageUrl} alt="user-pfp" />
          {/* <button onClick={signIn} className="button">
                        <span className="buttonText"></span>
                    </button> */}
        </div>
      )}
    </div>
  );
};

export default GoogleLoginHook;
