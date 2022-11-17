import React from "react";
import { useLoaderData } from "react-router-dom";
import PremiumCourse from "../PremiumCourse/PremiumCourse";

const CheckOut = () => {
  const checkCourses = useLoaderData();
  const { title, _id } = checkCourses;

  return (
    <div>
      <PremiumCourse key={_id} checkCourse={title}></PremiumCourse>
    </div>
  );
};

export default CheckOut;
