// import React from 'react';
import Cover from '../Shared/Cover/Cover';
// import Cover from '../Shared/Cover/Cove';
import coverImg from "../../../assets/menu/banner3.jpg"
import MenuCard from '../../Home/Shared/MenuCard/MenuCard';
import Popular from '../../Home/Popular/Popular';
import Pizza from "../../../assets/menu/pizza-bg.jpg"
import dessert from "../../../assets/menu/dessert-bg.jpeg"
import soup from "../../../assets/menu/soup-bg.jpg"
import salad from "../../../assets/menu/salad-bg.jpg"
import menu from "../../../assets/menu/menu-bg.png"
import { Helmet } from 'react-helmet-async';
import useMenu from '../../../hooks/useMenu/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import Title from '../../../components/Title/Title';
const Menu = () => {
    const [menu] = useMenu()
    const pizzas = menu.filter(items => items.category === "pizza")
    const offered = menu.filter(items => items.category === "offered")

    const desserts = menu.filter(items => items.category === "dessert")
    const soups = menu.filter(items => items.category === "soup")
    const salads = menu.filter(items => items.category === "salad")
    // console.log(salads);
    // console.log(soups);
    // console.log(desserts);
    // console.log(pizzas);
    return (
        <div className='max-w-7xl mx-auto space-y-12'>
            <Helmet>
                <title>
                    Bistro | Menu
                </title>
            </Helmet>
            <Cover img={coverImg} title={"OUR MENU"} subtitle={"Would you like to try a dish?"}></Cover>
            <Popular></Popular>

            <Title mainHeading={"Todays Offer"} subHeading={"Don`t Miss"}></Title>
            <MenuCategory
                categoryName={offered}
            ></MenuCategory>

            <MenuCategory
                img={dessert}
                title={"Dessert"}
                categoryName={desserts}
            ></MenuCategory>


            <MenuCategory
                img={Pizza}
                title={"Pizza"}
                categoryName={pizzas}

            ></MenuCategory>
            <MenuCategory
                img={salad}
                categoryName={salads}
                title={"Salad"}
            ></MenuCategory>

            <MenuCategory
                img={soup}
                categoryName={soups}
                title={"Soup"}
            ></MenuCategory>
            {/* <Cover img={Pizza} title={"OUR MENU"} subtitle={"Would you like to try a dish?"}></Cover>
            <Popular></Popular> */}
            {/* <MenuCategory
                title={"Pizza"}
                img={Pizza}
                subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory> */}
        </div>
    );
};

export default Menu;