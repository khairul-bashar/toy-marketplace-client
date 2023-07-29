import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import Swal from "sweetalert2";
import { useAuthGlobally } from "../Context/AuthProvider";
import useTitle from "../Hooks/UseHooks";

const EditToy = () => {
  const {user} = useAuthGlobally();
  useTitle("Edit Toy");

  
  
  const { id } = useParams();
  const [viewData, setViewData] = useState({});
  
  const {
    photo_url,
    name,
    sub_category,
    price,
    rating,
    quantity,
    description,
  } = viewData;
  
  const [selectedOption, setSelectedOption] = useState(sub_category);
  useEffect(() => {
    fetch(`https://toy-marketplace-server-phi.vercel.app/${id}`)
      .then((res) => res.json())
      .then((data) => setViewData(data));
  }, [id]);

  const updateToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo_url = form.toy_image.value;
    const name = form.name.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.email.value;
    const sub_category = selectedOption.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
  

    const toy = {
      photo_url,
      name,
      seller_name,
      seller_email,
      sub_category,
      price,
      rating,
      quantity,
      description,
    };

    console.log(price);
    fetch(`https://toy-marketplace-server-gules.vercel.app/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "",
            text: "Data Updated Successfully!",
            icon: "success",
            confirmButtonColor: "#B2A4FF",
            confirmButtonText: "ok",
          });
        }
      });
  };

  const options = [
    { value: "Sports car", label: "Sports car" },
    { value: "Regular car", label: "Regular car" },
    { value: "Mini fire truck", label: "Mini fire truck" },
  ];

  return (
    <main>
      <div className="text-center my-10">
        <h2 className="text-3xl text-warning font-bold">Update Toy</h2>
      </div>
      <form onSubmit={updateToy} className="container mx-auto bg-slate-50 py-5">
        <section className="md:grid md:grid-cols-2 gap-x-5 w-4/5 mx-auto">
          <div className="w-full my-2">
            <span className="block font-bold">Toy Image</span>
            <input
              name="toy_image"
              type="url"
              className="w-full px-4 py-3 outline-0 mt-3 rounded border placeholder:text-lg"
              autoComplete="off"
              placeholder="Toy image url"
              defaultValue={photo_url}
            />
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Product Name</span>
            <input
              name="name"
              type="text"
              className="w-full px-4 py-3 outline-0 mt-3 rounded border placeholder:text-lg"
              autoComplete="off"
              placeholder="Toy Name"
              defaultValue={name}
            />
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Seller name</span>
            <input
              name="seller_name"
              defaultValue={user?.displayName && user?.displayName}
              type="text"
              className="w-full px-4 py-3 outline-0 mt-3 rounded border"
              autoComplete="off"
              disabled
            />
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Seller Email</span>
            <input
              name="email"
              type="text"
              defaultValue={user?.email && user?.email}
              className="w-full px-4 py-3 outline-0 mt-3 rounded border"
              autoComplete="off"
              disabled
            />
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Sub-Category</span>
            <CreatableSelect
              className="w-full py-5"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              required
            />
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Price</span>
            <input
              name="price"
              type="number"
              className="w-full px-4 py-3 outline-0 mt-3 rounded border placeholder:text-lg"
              autoComplete="off"
              placeholder="Price"
              defaultValue={price}
            />
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Rating</span>
            <input
              name="rating"
              type="number"
              className="w-full px-4 py-3 outline-0 mt-3 rounded border placeholder:text-lg"
              autoComplete="off"
              placeholder="Rating"
              defaultValue={rating}
            />
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Available Quantity</span>
            <input
              name="quantity"
              type="number"
              className="w-full px-4 py-3 outline-0 mt-3 rounded border placeholder:text-lg"
              autoComplete="off"
              placeholder="Available Quantity"
              defaultValue={quantity}
            />
          </div>
          <div className="w-full my-2 md:col-span-2">
            <span className="block font-bold">Detail Description</span>
            <textarea
              name="description"
              className="w-full h-[100px] resize-none px-4 py-3 outline-0 mt-3 rounded border placeholder:text-lg"
              placeholder="Description"
              defaultValue={description}
            ></textarea>
          </div>
        </section>

        <div>
          <button
            className="px-4 bg-[#FFB6C6]  block mt-10 py-3 rounded text-white w-full"
            type="submit"
          >
            Update Toy
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditToy;
