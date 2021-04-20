import firebase from "firebase/app";
import LockIcon from "@material-ui/icons/Lock";

import { useHistory } from "react-router-dom";

const SignOut = () => {
  const history = useHistory();
  const auth = firebase.auth();

  // Go to sign-in page after signing out
  const signOut = () => {
    auth.signOut().then(() => {
      history.push("/sign-in");
    });
  };

  return (
    auth.currentUser && (
      <div
        onClick={signOut}
        className="bg-yellow-500 flex items-center shadow-md px-3 py-1 rounded-lg cursor-pointer hover:shadow-lg transition-all transform hover:text-yellow-500 hover:scale-105 hover:bg-opacity-0"
      >
        Sign Out <LockIcon className="ml-1" />
      </div>
    )
  );
};

export default SignOut;
