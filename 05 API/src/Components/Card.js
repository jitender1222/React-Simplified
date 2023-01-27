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
          className="food-img"
          src={IMG_CDN_URL+cloudinaryImageId}
          alt="image"
        />
        <div className="subHeading-1">
        <h3>{name}</h3>
        <h3>{avgRating}Star</h3>
        </div>
        <h3>{address}</h3>
        <div className="subHeading-2">
        <h3>{area}</h3>
        <h3>{cuisines}</h3>
        </div>
      </div>
    );
  };