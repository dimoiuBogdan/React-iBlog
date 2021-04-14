import firebase from "firebase/app";

const SignOut = () => {
  const auth = firebase.auth();
  return (
    auth.currentUser && (
      <div
        onClick={() => auth.signOut()}
        className="bg-yellow-500 shadow-md px-3 py-1 rounded-lg cursor-pointer hover:shadow-lg transition-all transform hover:scale-105"
      >
        Sign Out
      </div>
    )
  );
};

export default SignOut;
