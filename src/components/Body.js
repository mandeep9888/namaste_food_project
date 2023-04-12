import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

import { useState } from "react";

const Body = () => {
  // local state variable - super powerful react hook
  const [topRated, setTopRated] = useState(resList);

  // normal js variable
  //   let topRated = [];
  return (
    <div className="body">
      <button
        className="top-rated"
        onClick={() => {
          //filter logic
          console.log("inside onclick", topRated);
          const topRatedFilter = topRated.filter((res) => {
            return res.data.avgRating > 4;
          });
          setTopRated(topRatedFilter);
          console.log(topRated);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {topRated.map((restraunt) => (
          <RestaurantCard key={restraunt.data.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
