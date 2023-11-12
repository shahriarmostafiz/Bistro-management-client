import { useEffect, useState } from 'react';
import MenuCard from '../Shared/MenuCard/MenuCard';
import Title from '../../../components/Title/Title';
import useMenu from '../../../hooks/useMenu/useMenu';

const Popular = () => {
    // const [popular, setPopular] = useState([])
    // useEffect(() => {
    //     fetch("./menu.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularData = data.filter(item => item.category === "popular")
    //             setPopular(popularData)
    //         })
    // }, [popular])
    const [menu] = useMenu()
    // console.log(menu);
    const popular = menu?.filter(item => item.category === "popular")
    // console.log(popular);
    return (
        <div>
            <Title subHeading={"Popular Items"} mainHeading={"From our menu"}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                {
                    popular?.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default Popular;