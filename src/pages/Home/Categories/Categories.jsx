import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import "./styles.css";
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import Title from '../../../components/Title/Title';
const data = [
    {
        img: slide1,
        name: "salads"
    },
    {
        img: slide2,
        name: "Pizzas"
    },
    {
        img: slide3,
        name: "Soups"
    },
    {
        img: slide4,
        name: "Dessert"
    },
    {
        img: slide5,
        name: "Salads"
    },
]

const Categories = () => {
    return (
        <div className=''>
            <Title subHeading={"From 9 AM to 11PM"} mainHeading={"Order Online"}></Title>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                loop={true}
                className="mySwiper"
            >
                {
                    data?.map((item, idx) => <SwiperSlide key={idx}><img src={item.img} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white font-Josefin">{item.name}</h3>
                    </SwiperSlide>)
                }
                {/* <SwiperSlide><img src={slide1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white font-Josefin">Salad</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-14 text-white font-Josefin">Soups</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-14 text-white font-Josefin">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-14 text-white font-Josefin">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-14 text-white font-Josefin">Salads</h3>
                </SwiperSlide> */}

            </Swiper>
        </div>
    );
};

export default Categories;