import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const HomepagePost = ({ post }) => {
  const { title, image, content, tags, date, author } = post;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="sm:w-1/2 w-full md:px-5 sm:px-2 px-5 mb-10 h-36rem md:h-auto">
      <div className="overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-xl w-full h-full">
        <div
          className="h-52 w-full bg-center bg-cover border-b-4 border-yellow-500"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="md:px-10 px-5 py-4">
          <p className="text-gray-400">
            {date} - {author}
          </p>
          <div
            className="font-medium text-2xl mb-3 h-8 overflow-hidden text-gray-600"
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            {title}
          </div>
          <p className="text-gray-600 overflow-hidden h-48">{content}</p>
          <span className="pl-2 text-yellow-500 font-medium transition-all hover:text-yellow-600">
            ... Read More
          </span>
          <div className="bg-gray-100 h-0.5 my-3"></div>
          <div className="flex items-center">
            {tags.map((tag, index) => (
              <h3 key={index} className="text-gray-400 pr-2">
                {tag}
              </h3>
            ))}
          </div>
        </div>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>{title}</Typography>
        </Popover>
      </div>
    </div>
  );
};

export default HomepagePost;
