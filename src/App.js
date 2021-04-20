// Firebase imports
import firebase from "firebase/app";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
// Component imports
import SignIn from "./COMPONENTS/LOGIN/SignIn";
import Blog from "./COMPONENTS/Blog";
import PageNotFound from "./COMPONENTS/Sections/PageNotFound";
// Router Imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Firebase initialization
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

const App = () => {
  const auth = firebase.auth();
  // User is null if logged out
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="w-full min-h-screen">
        <Switch>
          {user ? (
            <Route path="/homepage" component={Blog} exact />
          ) : (
            <Route path="/sign-in" component={SignIn} />
          )}
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
