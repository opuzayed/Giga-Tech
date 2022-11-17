import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, category_id, _id } = news;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/checkout/${_id}`}>
          <Button variant="primary">Get Premium Access</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
