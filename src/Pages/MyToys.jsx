import { useEffect, useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";
import { useAuthGlobally } from "../Context/AuthProvider";
import useTitle from "../Hooks/UseHooks";
import UpdateToy from "./UpdateToy";

const MyToys = () => {
  const [loading,setLoading] =useState(false)
  const { user } = useAuthGlobally();

  useTitle("My Toys");

  const [updateToy, setUpdateToy] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(0);
  const [selectedOption, setSelectedOption] = useState("ascending");

  const url = `https://toy-marketplace-server-phi.vercel.app/myToys/${user?.email}`;

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        {
          setUpdateToy(data)
          setLoading(false)
        };
      });
  }, [url, deleteConfirm]);

  const deleteToy = (id) => {
    const isDelete = confirm("Are you sure you want to delete this?");
    if (isDelete) {
      fetch(`https://toy-marketplace-server-phi.vercel.app/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            setDeleteConfirm(deleteConfirm + 1);
            Swal.fire({
              title: "",
              text: "Data Delete Successfully!",
              icon: "Delete",
              confirmButtonColor: "#B2A4FF",
              confirmButtonText: "ok",
            });
          }
        });
    }
  };

  const options = [
    { value: "ascending", label: "Ascending" },
    { value: "descending", label: "Descending" },
  ];

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://toy-marketplace-server-phi.vercel.app/sort?sortby=${selectedOption.value}&email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUpdateToy(data);
        setLoading(false);
      });
  }, [selectedOption]);

  if (loading) {
    return <Loader/>
  }

  return (
    <div className="container my-12 mx-auto">
      <section className="mr-auto my-10 min-w-[200px] md:w-1/3">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </section>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full min-w-[900px]">
          <thead>
            <tr className="text-center text-base text-warning">
              <th>Seller Name</th>
              <th>ToyS Name</th>
              <th>sub-category</th>
              <th>price</th>
              <th>Available Quantity</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {updateToy.map((toys) => (
              <UpdateToy key={toys._id} toys={toys} deleteToy={deleteToy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
