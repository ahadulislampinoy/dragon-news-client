import React from "react";
import { Card } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegShareSquare, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, image_url, details, author, rating, total_view } = news;
  return (
    <div>
      <Card className="my-4">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={author?.img}
                style={{ height: "60px" }}
                className="rounded-pill"
                alt=""
              />
              <p className="ms-2 mb-0">
                {author?.name ? author.name : "Name not found"} <br />
                {author?.published_date
                  ? author.published_date
                  : "Publish date not found"}
              </p>
            </div>
            <div>
              <FaRegBookmark className="me-2" />
              <FaRegShareSquare />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text className="mt-2">
            {details?.length > 250 ? (
              <>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            ) : (
              details
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <FaStar className="text-warning" />
              <span className="fw-bold ms-1"> {rating?.number}</span>
            </div>
            <div>
              <FaEye /> <span className="fw-bold ms-1"> {total_view}</span>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
