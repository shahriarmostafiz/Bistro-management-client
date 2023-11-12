import React, { useEffect, useState } from 'react';
import Title from '../../../components/Title/Title';
import ReviewCard from './ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';


const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div>
            <Title mainHeading={"Testimonials"} subHeading={"What Our Clients Say"} />
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {reviews.map(review => <SwiperSlide key={review._id}  >
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default Review;