import firebase from "firebase/app";

import { useState } from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const signIn = () => {
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider);
};

const SignIn = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      id="sign-in-wrap"
      className="flex justify-center items-center w-full h-screen"
    >
      <div className="bg-gray-100 py-7 px-12 text-center shadow-lg border-r-4 border-b-4 border-blue-200 rounded-md">
        <h2 className="text-6xl font-semibold mb-2 text-gray-800">
          Welcome To <span className="text-yellow-500">iBlog</span>
        </h2>
        <p className="mb-12 text-xl text-gray-500">
          Amazing Tech Articles Written By Amazing People
        </p>
        <button
          className="mb-12 flex mx-auto items-center bg-yellow-500 text-white text-4xl px-5 py-2 rounded-md transition-all duration-300 shadow-md focus:outline-none hover:shadow-xl hover:text-yellow-500 hover:bg-opacity-0 hover:border-yellow-500 border-4"
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
              <Typography>General settings</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-left">
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
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
              <Typography>Users</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-left">
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
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
              <Typography>Advanced settings</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-left">
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography>Personal data</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-left">
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
