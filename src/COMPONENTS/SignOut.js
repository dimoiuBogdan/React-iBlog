import firebase from "firebase/app";

const SignOut = () => {
  const auth = firebase.auth();
  return auth.currentUser && <div onClick={() => auth.signOut()}>Sign Out</div>;
};

export default SignOut;
