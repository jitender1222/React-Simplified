import { IMG_CDN_URL } from "../../config";

export default Card = ({
    cloudinaryImageId,
    name,
    address,
    area,
    avgRating,
    cuisines,
}) => {
    return (
      <div className="cards">
        <img
          className="food"
          src={IMG_CDN_URL+cloudinaryImageId}
          alt="image"
        />
        <h3>{name}</h3>
        <h3>{address}</h3>
        <h3>{area}</h3>
        <h3>{avgRating}Star</h3>
        <h3>{cuisines}</h3>
      </div>
    );
  };