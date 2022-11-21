import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, details, image_url } = news;

  return (
    <div className="col-lg-6">
      <Card className="mb-5">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 110 ? (
              <>
                {details.slice(0, 110) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read More</Link>{" "}
              </>
            ) : (
              details
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
