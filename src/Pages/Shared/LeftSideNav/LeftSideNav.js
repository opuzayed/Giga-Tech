import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://b610-lerning-platform-server-side-opuzayed.vercel.app/news-categories"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="lnav">
      <h4>Course Categories</h4>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              className="text-decoration-none"
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
