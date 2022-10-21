import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import brand1 from "../../../assets/brand/brand1.png";
import brand2 from "../../../assets/brand/brand2.webp";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const RightSideNav = () => {
  const { googeSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  // Google sign in
  const handleGoogleSignIn = () => {
    googeSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-3"
          variant="outline-primary"
        >
          <FaGoogle /> <span> </span>
          Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login With Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <ListGroup>
          <h5>Find us on</h5>
          <ListGroup.Item>
            <FaFacebook /> <span> </span>
            FaceBook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> <span> </span>
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitch /> <span> </span> Twitch
          </ListGroup.Item>
          <ListGroup.Item>
            <FaWhatsapp /> <span> </span> Whatsapp
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={brand1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={brand2} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightSideNav;
