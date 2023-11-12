
import PropTypes from "prop-types"
const MenuCard = ({ item }) => {
    const { name, price, image, recipe } = item
    return (
        <div className='flex gap-5 items-center justify-between'>
            <div>
                <img style={{ borderRadius: '20px 200px 200px 200px', width: "118px" }} src={image} className=' rounded-md' alt="" />
            </div>
            <div>
                <h1 className='text-xl  font-semibold'>{name} --------</h1>
                <p className='text-gray-400 '>{recipe}</p>
            </div>
            <div className='text-amber-400 font-medium text-2xl '>${price}</div>
        </div>
    );
};

export default MenuCard;
MenuCard.propTypes = {
    item: PropTypes.object
}