import React  from "react";
import RatingSelect from "./RatingSelect";
import Image from "../images/icon-star.svg";
import { Button, Typography } from "@mui/material";

function Form() {   

  return (
    <div className="card-one">
      <div className="icon">
        <img src={Image} alt="star" />
      </div>
      <div className="text">
        <Typography variant="h4" gutterBottom>
          How did we do?
        </Typography>
        <Typography variant="subtitle" gutterBottom>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Typography>
      </div>
      <RatingSelect />
      <div className="submit">
        <Button Link_to="/submitted">Submit</Button>
      </div>
    </div>
  );
}

export default Form;
