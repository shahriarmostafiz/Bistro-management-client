import React, { useState } from 'react';
import Cover from '../../Menu/Shared/Cover/Cover';
import Banner from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ["Salad", "Pizza", "Soup", "Dessert", "Drinks"]
    const { category } = useParams()
    const initialIndex = category ? categories.indexOf(category) : 0
    // console.log(initialIndex);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
    // console.log(category);
    const pizzas = menu.filter(items => items.category === "pizza")
    const drinks = menu.filter(items => items.category === "drinks")

    const desserts = menu.filter(items => items.category === "dessert")
    const soups = menu.filter(items => items.category === "soup")
    const salads = menu.filter(items => items.category === "salad")
    return (
        <div>
            <Helmet>
                <title>
                    Order | {category ? category : "Today"}
                </title>
            </Helmet>
            <Cover img={Banner} title={"Order Page"} subtitle={"Get the best"}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad </Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salads}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzas}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;