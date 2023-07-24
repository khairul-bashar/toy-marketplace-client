import React, { useEffect, useState } from 'react';
import useTitle from '../Hooks/UseHooks';
import SingleToy from './SingleToy';

const AllToys = () => {
  useTitle('AllToys')
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/allToys`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  
    return (
      <div className="container my-12 mx-auto">
        <form
          //   onSubmit={search}
          className="overflow-hidden relative my-10  shadow h-[50px] mx-w-[500px] min-w-[280px] rounded-full mx-auto"
        >
          <input
            type="search"
            name="search"
            id=""
            placeholder="search"
            className="placeholder:text-lg h-full rounded-full border-2 border-red-100 shadow-2xl px-5 w-full"
          />
          <input
            type="submit"
            value="search"
            className="bg-[#FFB6C6]  w-[90px] flex justify-between items-center text-center absolute right-0 top-0 h-full px-3 text-white"
          />
        </form>

        <div className="overflow-x-auto">
          <table className="table  table-compact w-full min-w-[900px]">
            <thead>
              <tr className="text-center capitalize text-lg">
                <th>Seller Name</th>
                <th>Toys Name</th>
                <th>Sub-category</th>
                <th>price</th>
                <th>Available Quantity</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((singleToy) => (
                <SingleToy key={singleToy._id} singleToy={singleToy} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllToys;