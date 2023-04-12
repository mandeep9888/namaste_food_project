import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  /**
   * - RestaurantCart will have
   * - Img
   * - Name of restaurant , star rating, cuisine, delivery distance and time
   */
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    area,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="restaurant-card">
      <img
        className="res-image"
        alt="restaurant image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3> {name}</h3>
      <h3> {cuisines.join(", ")}</h3>
      <h3> {area}</h3>
      <h3> ₹{costForTwo / 100} For Two </h3>
      <h3> {avgRating} Stars</h3>
      <h3> {deliveryTime} minutes</h3>
    </div>
  );
};

export default RestaurantCard;
