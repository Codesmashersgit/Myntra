import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log("Error fetching categories:", err));
  }, []);
  return (
    <div>
      {/* Banner Image */}
      <img
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/10/21/a0762827-6c8e-4cc9-aed6-236bbb5d19131729500354356-Crazy-Deals.jpg"
        className="mt-5 w-full object-contain"
        alt="Banner"
      />

      {/* Category Images */}
      <div className="flex flex-wrap mt-5 justify-center items-center gap-2">
        {categories.map((category, index) => (
          <Link key={index} to={`/category/${index}`}>
            <img
              loading="lazy"
              src={category}
              alt={`Category ${index + 1}`}
              className="md:h-[300px] h-[200px] object-contain cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
