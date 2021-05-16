// Firebase imports
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
// React Imports
import { lazy, Suspense } from "react";
// Router Imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AddPost from "./COMPONENTS/ADD_POST/AddPost";
import ProfilePage from "./COMPONENTS/PROFILE/ProfilePage";
// Component imports
const SignIn = lazy(() => import("./COMPONENTS/LOGIN/SignIn"));
const Blog = lazy(() => import("./COMPONENTS/Blog"));
const SinglePost = lazy(() => import("./COMPONENTS/SINGLE_POST/SinglePost"));
const PageNotFound = lazy(() =>
  import("./COMPONENTS/HOMEPAGE/Sections/PageNotFound")
);
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

  const firestore = firebase.firestore();
  const allBlogsRef = firestore.collection("all-blogs");
  const query = allBlogsRef.orderBy("date");
  const [allBlogs] = useCollectionDataOnce(query, { idField: "id" });

  return (
    <Router>
      <div className="w-full min-h-screen">
        <Suspense fallback="Loading...">
          <Switch>
            {user ? (
              <Route
                path="/homepage"
                component={() => <Blog user={user} allBlogs={allBlogs} />}
                exact
              />
            ) : (
              <Route path="/sign-in" component={SignIn} />
            )}
            {user ? (
              <Redirect exact from="/" to="/homepage" />
            ) : (
              <Redirect exact from="/" to="/sign-in" />
            )}
            {user && (
              <Route
                exact
                path="/post/:id"
                component={() => <SinglePost allBlogs={allBlogs} />}
              />
            )}
            {user && (
              <Route
                exact
                path="/add-post"
                component={() => <AddPost user={user} />}
              ></Route>
            )}
            {user && (
              <Route
                exact
                path="/profile"
                component={() => (
                  <ProfilePage user={user} allBlogs={allBlogs} />
                )}
              ></Route>
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
