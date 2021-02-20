// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

// firebase設定は念の為省略
const firebaseConfig = {
};
const project = firebase.initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', async () => {
  const loadEl = document.querySelector('#load');
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.firestore().doc('/foo/bar').get().then(() => { });
  // firebase.functions().httpsCallable('yourFunction')().then(() => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  // firebase.analytics(); // call to activate
  // firebase.analytics().logEvent('tutorial_completed');
  // firebase.performance(); // call to activate
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    let app = firebase.app();
    let features = [
      'auth',
      'analytics',
      'firestore',
    ].filter(feature => typeof app[feature] === 'function');
    loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
  }
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user.displayName);

    // KARTEにfirebase AuthのユーザIDを送信
    tracker.track('identify', {
      user_id: user.uid,
      user_email: user.email,
    });
  } else {
    // No user is signed in.
  }
});

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult) {
      console.log(authResult.user);
    },
  },
  signInFlow: "",
  signInSuccessUrl: '/',
  signInOptions: [
    // List of OAuth providers supported.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // Other config options...
});


// Firebase Auth SignOut
document.addEventListener('DOMContentLoaded', async () => {
  const loadEl = document.querySelector('#signout');
  loadEl.addEventListener('click', firebaseAuthSignOut);
});

async function firebaseAuthSignOut() {
  const res = await firebase.auth().signOut();
  console.log(res);
  return res;
}
