import { BsHeartHalf } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";



const Rating = ({value, text}) => {
  return (
    <div className="rating">
      <span>
        {value >= 1 ? <FaHeart /> : value >= 0.5 ? <BsHeartHalf /> : <FaRegHeart />}
      </span>
      <span>
        {value >= 2 ? <FaHeart /> : value >= 1.5 ? <BsHeartHalf /> : <FaRegHeart />}
      </span>
      <span>
        {value >= 3 ? <FaHeart /> : value >= 2.5 ? <BsHeartHalf /> : <FaRegHeart />}
      </span>
      <span>
        {value >= 4 ? <FaHeart /> : value >= 3.5 ? <BsHeartHalf /> : <FaRegHeart />}
      </span>
      <span>
        {value >= 5 ? <FaHeart /> : value >= 4.5 ? <BsHeartHalf /> : <FaRegHeart />}
      </span>
      <span className="rating-span">{text && text}</span>
    </div>
  )
}
export default Rating