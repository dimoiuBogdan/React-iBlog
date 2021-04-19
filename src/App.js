import firebase from "firebase/app";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import SignIn from "./COMPONENTS/LOGIN/SignIn";
import Blog from "./COMPONENTS/Blog";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="w-full min-h-screen">
        <Switch>
          {user ? (
            <Route path="/" component={Blog} exact />
          ) : (
            <Route path="/sign-in" component={SignIn} />
          )}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
