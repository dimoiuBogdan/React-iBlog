// Firebase imports
import firebase from "firebase/app";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
// React Imports
import { lazy, Suspense } from "react";
// Router Imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
// Component imports
const SignIn = lazy(() => import("./COMPONENTS/LOGIN/SignIn"));
const Blog = lazy(() => import("./COMPONENTS/Blog"));
const PageNotFound = lazy(() => import("./COMPONENTS/Sections/PageNotFound"));
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
  let [user] = useAuthState(auth);

  if (localStorage.getItem("user") && !user)
    user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      <div className="w-full min-h-screen">
        <Suspense fallback="Loading...">
          <Switch>
            {user ? (
              <Route
                path="/homepage"
                component={() => <Blog user={user} />}
                exact
              />
            ) : (
              <Route path="/sign-in" component={() => <SignIn />} />
            )}
            {user ? (
              <Redirect exact from="/" to="/homepage" />
            ) : (
              <Redirect exact from="/" to="/sign-in" />
            )}
            <Route path="*">
              <PageNotFound user={user} />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
