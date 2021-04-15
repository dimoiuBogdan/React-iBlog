import firebase from "firebase/app";
import LockIcon from "@material-ui/icons/Lock";

const SignOut = () => {
  const auth = firebase.auth();
  return (
    auth.currentUser && (
      <div
        onClick={() => {
          window.confirm("are you sure you want to sign out?");
          auth.signOut();
        }}
        className="bg-yellow-500 flex items-center shadow-md px-3 py-1 rounded-lg cursor-pointer hover:shadow-lg transition-all transform hover:scale-105"
      >
        Sign Out <LockIcon className="ml-1" />
      </div>
    )
  );
};

export default SignOut;
