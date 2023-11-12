
// import { Rating, Star } from '@smastrom/react-rating'
import { useState } from "react";
import quote from "../../../../public/quote-left 1.svg"
import '@smastrom/react-rating/style.css'

// Declare it outside your component so it doesn't get re-created
// const myStyles = {
//     itemShapes: Star,
//     activeFillColor: '#ffb700',
//     inactiveFillColor: '#fbf1a9'
// }

import { Rating, Star } from '@smastrom/react-rating'

// Declare it outside your component so it doesn't get re-created
const myStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}
const ReviewCard = ({ review }) => {
    const { name, details, rating: rate } = review
    const [rating, setRating] = useState(0)

    return (
        <div className='text-center space-y-8'>
            <div className="flex justify-center">
                <Rating style={{ maxWidth: 300 }} value={rate} onChange={setRating} itemStyles={myStyles} />
            </div>
            <div className="flex justify-center">

                <img src={quote} className="" alt="" />
            </div>
            <p className='text-xl font-medium'>{details}</p>
            <h1 className="text-2xl text-amber-500">{name}</h1>
        </div>
    );
};

export default ReviewCard;