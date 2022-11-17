import React from "react";

const PremiumCourse = ({ checkCourse }) => {
  console.log(checkCourse);
  return (
    <div>
      <h2 style={{ margin: "30px auto" }}>Course Name : {checkCourse}</h2>
    </div>
  );
};

export default PremiumCourse;
