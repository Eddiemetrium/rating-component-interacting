import React, { useState } from 'react'
import './Rating.css'
import Card from '../components/Card'
import starImg from '../media/icon-star.svg'
const Rating = ({rating,setRating, setShowThankYouPage}) => {
  const [activeRating, setActiveRating] = useState({
    oneStar: false,
    twoStar: false,
    threeStar: false,
    fourStar: false,
    fiveStar: false,
  });
  const handleSubmit = () => {
    console.log(true ,'truth')
    if(!rating) return;
    setShowThankYouPage(true);
  }
return (
  <Card>
    <div className="star_img_container">
      <img src={starImg} alt="" />
    </div>
    <h2 className="title">How did we do?</h2>
    <p className="text">
      Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!
    </p>
    <div className="rating">
      <div
        className={
          activeRating.oneStar ? "rating_container active" : "rating_container"
        }
        onClick={() => {
          setActiveRating({
            oneStar: true,
            twoStar: false,
            threeStar: false,
            fourStar: false,
            fiveStar: false,
          });
          setRating(1)
          console.log(1 ,'one')
        }}
      >
        1
      </div>
      <div
        className={
          activeRating.twoStar ? "rating_container active" : "rating_container"
        }
        onClick={() => {
          setActiveRating({
            oneStar: false,
            twoStar: true,
            threeStar: false,
            fourStar: false,
            fiveStar: false,
          });
          setRating(2);
                    console.log(2 ,'two')

        }}
      >
        2
      </div>
      <div
        className={
          activeRating.threeStar
            ? "rating_container active"
            : "rating_container"
        }
        onClick={() => {
          setActiveRating({
            oneStar: false,
            twoStar: false,
            threeStar: true,
            fourStar: false,
            fiveStar: false,
          });
          setRating(3);
                    console.log(3 ,'three')

        }}
      >
        3
      </div>
      <div
        className={
          activeRating.fourStar ? "rating_container active" : "rating_container"
        }
        onClick={() => {
          setActiveRating({
            oneStar: false,
            twoStar: false,
            threeStar: false,
            fourStar: true,
            fiveStar: false,
          });
          setRating(4);
                    console.log(4, "four");

        }}
      >
        4
      </div>
      <div
        className={
          activeRating.fiveStar ? "rating_container active" : "rating_container"
        }
        onClick={() => {
          setActiveRating({
            oneStar: false,
            twoStar: false,
            threeStar: false,
            fourStar: false,
            fiveStar: true,
          });
          setRating(5);
                    console.log(5, "five");

        }}
      >
        5
      </div>
    </div>
    <button onClick={handleSubmit} 
    //onSubmit does not work... Why don't know made the app not work displaying the thank you page!
    className="submit_btn">
      Submit
    </button>
  </Card>
);}
export default Rating