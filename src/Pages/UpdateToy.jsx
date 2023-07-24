import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const UpdateToy = ({ toys, deleteToy }) => {
  const { seller_name, name, price, sub_category, quantity, _id } = toys;

  return (
    <tr className="text-center text-[17px]">
      <td>{seller_name}</td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td className="flex gap-4 text-lg justify-center">
        <Link
          to={`/update/${_id}`}
          className="border-2 rounded p-2 cursor-pointer"
        >
          <FiEdit />
        </Link>
        <span
          onClick={() => deleteToy(_id)}
          className="bg-red-500 p-2 text-white rounded cursor-pointer"
        >
          <RiDeleteBin7Fill />
        </span>
      </td>
    </tr>
  );
};

export default UpdateToy;
