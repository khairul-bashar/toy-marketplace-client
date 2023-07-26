import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-toastify";
import { useAuthGlobally } from "../../Context/AuthProvider";
import Toy from "./Toy";

const ShowAllToy = () => {
  const { user } = useAuthGlobally();
  const [loading, setLoading] = useState(false);


  const [tabs, setTabs] = useState([]);
  const [subCategory, setSubCategory] = useState("Regular car");
  // console.log(tabs);

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://toy-marketplace-server-phi.vercel.app/allToys/${subCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTabs(data);
        setLoading(false);
      });
  }, [subCategory]);

  const handleSubCategory = (sub) => {
    setSubCategory(sub);
  };

  const handelTost = () => {
    if (!user) {
      toast.error("You Have To Login First To View Details");
    }
  };

  // if (loading) {
  //   return <Loader />;
  // }
  return (
    <div className="container px-10 mx-auto py-10">
      <Tabs className="text-center">
        <TabList>
          <Tab onClick={() => handleSubCategory("Regular car")}>
            Regular car
          </Tab>
          <Tab onClick={() => handleSubCategory("Sports car")}>Sports car</Tab>
          <Tab onClick={() => handleSubCategory("Mini fire truck")}>
            Mini fire truck
          </Tab>
        </TabList>

        <div className="py-5">
          <h2 className="text-3xl font-semibold text-warning text-center">
            Top Rated Cars
          </h2>
          <p className="text-slate-500 text-base py-2 w-2/3 mx-auto">
            This is Top rated Product . this product quantity is very Nice. my
            expectations with its realistic. loves this doll toy and carries it
            everywhere. Top Rated American doll toy Rating: 5.0 Add to Cart Top
            Rated American doll toy Rating: 4.7 Add to Cart
          </p>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5">
            {tabs?.map((tab) => (
              <Toy toy={tab} key={tab._id}></Toy>
            ))}
          </div>
        </TabPanel>
        
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-5">
            {tabs?.map((tab) => (
              <Toy toy={tab} key={tab._id}></Toy>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-5">
            {tabs?.map((tab) => (
              <Toy toy={tab} key={tab._id}></Toy>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShowAllToy;
