import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  // This page is for ...read more in news details
  const news = useLoaderData();
  const { category_id, title, image_url, details } = news;

  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary" className="w-100">
            All news in this category
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
