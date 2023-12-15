import { BsHeartHalf } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import './rating.css';



const Rating = ({value, reviewsCount}) => {
  return (
    <div className="rating">
      <span className="rating-icon">
        {value >= 1 ? <FaHeart /> : value >= 0.5 ? <BsHeartHalf /> : <FaRegHeart />}
      </span>
      <span className="rating-icon">
        {value >= 2 ? <FaHeart /> : value >= 1.5 ? <BsHeartHalf /> : <FaRegHeart />}
      </span>
      <span className="rating-icon">
        {value >= 3 ? <FaHeart /> : value >= 2.5 ? <BsHeartHalf /> : <FaRegHeart />}
      </span>
      <span className="rating-icon">
        {value >= 4 ? <FaHeart /> : value >= 3.5 ? <BsHeartHalf /> : <FaRegHeart />}
      </span>
      <span className="rating-icon">
        {value >= 5 ? <FaHeart /> : value >= 4.5 ? <BsHeartHalf /> : <FaRegHeart />}
      </span>
      <span className="rating-span">{reviewsCount && `${reviewsCount} Reviews`}</span>
    </div>
  )
}
export default Rating