import PropTypes from "prop-types"
import MenuCard from "../../Home/Shared/MenuCard/MenuCard";
import Cover from "../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ categoryName, title, img }) => {
    return (
        <div className="space-y-6 lg:space-y-10">
            {
                title && <Cover img={img} title={title}></Cover>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {
                    categoryName.map(menuItem => <MenuCard key={menuItem._id} item={menuItem}></MenuCard>)
                }
            </div>
            {
                title && <div className="text-center">
                    <Link to={`/order/${title}`} className="btn btn-outline border-0 border-b-2 border-amber-500 hover:bg-amber-500 ">
                        Order
                    </Link>
                </div>
            }
        </div>

    )

}
// import Cover from "../Shared/Cover/Cover";
// import MenuCard from "../../Home/Shared/MenuCard/MenuCard";
// const MenuCategory = ({ categoryName, title, subTitle, img }) => {
//     // const [menu] = useMenu()
//     // const items = menu.filter(menuItem => menuItem.category === categoryName)
//     return (
//         <div>
//             {title && <Cover title={title} img={img} subtitle={subTitle}></Cover>}
//             < div className="grid grid-cols-1 md:grid-cols-2 gap-5 " >
//                 {
//                     categoryName.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
//                 }
//             </div >

//         </div>)
// };

export default MenuCategory;
MenuCategory.propTypes = {
    categoryName: PropTypes.array
}