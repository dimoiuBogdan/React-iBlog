import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import SignIn from "./COMPONENTS/SignIn";
import Blog from "./COMPONENTS/Blog";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDWJbzv6kjeczZMbWvebYwXPwrsGkd6nyo",
    authDomain: "react-iblog.firebaseapp.com",
    projectId: "react-iblog",
    storageBucket: "react-iblog.appspot.com",
    messagingSenderId: "148398342234",
    appId: "1:148398342234:web:81dd2b237262095c6f1863",
    measurementId: "G-723958TV53",
  });
}

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="w-full min-h-screen bg-gray-200">
      {user ? <Blog /> : <SignIn />}
    </div>
  );
};

export default App;
