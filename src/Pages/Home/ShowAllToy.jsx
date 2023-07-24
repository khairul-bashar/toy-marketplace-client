import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-toastify";
import { useAuthGlobally } from "../../Context/AuthProvider";
import Toy from "./Toy";

const ShowAllToy = () => {
  const { user } = useAuthGlobally();
  

  const [tabs, setTabs] = useState([]);
  const [ subCategory, setSubCategory ] = useState("Regular car");
  // console.log(tabs);

  useEffect(() => {
    fetch(`http://localhost:3000/allToys/${subCategory}`)
      
      .then((res) => res.json())
      .then((data) => setTabs(data));
  }, [subCategory]);

  const handleSubCategory = (sub) => {
    setSubCategory(sub);
  };

  const handelTost = () => {
    if (!user) {
      toast.error("You Have To Login First To View Details");
    }
  };
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

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10">
            {tabs?.map((tab) => (
              <Toy toy={tab} key={tab._id}></Toy>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10">
            {tabs?.map((tab) => (
              <Toy toy={tab} key={tab._id}></Toy>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10">
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
