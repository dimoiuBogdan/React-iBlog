import firebase from "firebase/app";

import { useState } from "react";

import { useHistory } from "react-router-dom";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const SignIn = () => {
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const signIn = () => {
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

    // After signin in, go to homepage
    auth.signInWithPopup(provider).then(() => {
      history.push("/homepage");
    });
  };

  return (
    <div
      id="sign-in-wrap"
      className="flex justify-center items-center w-full h-screen"
    >
      <div className="bg-gray-100 py-7 px-12 text-center shadow-lg border-r-4 border-b-4 border-blue-200 rounded-md">
        <h2 className="text-6xl font-semibold mb-2 text-gray-800">
          Welcome To <span className="text-blue-400">iBlog</span>
        </h2>
        <p className="mb-12 text-xl text-gray-500">
          Amazing Tech Articles Written By Amazing People
        </p>
        <button
          className="mb-3 flex mx-auto items-center bg-blue-400 text-white text-4xl px-5 py-2 rounded-md transition-all duration-300 shadow-md focus:outline-none hover:shadow-xl hover:text-blue-400 hover:bg-opacity-0 hover:border-blue-400 border-4"
          onClick={signIn}
        >
          Sign In
          <LockOpenIcon className="ml-3" fontSize="large" />
        </button>
        <div className="max-w-3xl">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>What is this project?</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-left">
              <Typography>
                This is my first big project in React. It's a blog website where
                people can post anything.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography>Features</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-left">
              <Typography>
                Authentication, Adding Posts, Reading Posts, Adding headings,
                code, links, lists, etc.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography>Tools I Used</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-left">
              <Typography>
                React, TailwindCSS, Firebase, React-Router, MaterialUI, Custom
                Hooks, Local Storage, HighlightJS.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
