import { Link } from "react-router-dom";

const SingleToy = ({ singleToy}) => {
  const { seller_name, name, price, sub_category, quantity, _id } = singleToy;

  return (
    <tr className="text-center text-base">
      <td>{seller_name}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/view-details/${_id}`}>
          <button className="px-5 py-3 bg-[#FFB6C6] font-bold rounded-md text-white">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default SingleToy;
