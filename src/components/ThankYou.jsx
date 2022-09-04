import React from "react";
import  './ThankYou.css'
import ThankYouImg from "../media/illustration-thank-you.svg";
import Card from "./Card";
const ThankYou = ({rating}) => {
  return (
    <Card>
      <div className="thank_you_container">
        <img src={ThankYouImg} alt="" />
      </div>
      <div className="selected">You have selected {rating} out of 5 </div>

        <p className=""></p>
        <h2 className="title">Thank You!</h2>
        <p className="text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
     
    </Card>
  );
};
export default ThankYou;
