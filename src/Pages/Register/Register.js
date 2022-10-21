import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate("/");
        e.target.reset();
        handleUpdateProfile(name, photo);
        handleVerifyEmail();
      })
      .catch((error) => setError(error.message));
  };

  // update user profile
  const handleUpdateProfile = (name, photoUrl) => {
    updateUserProfile(name, photoUrl)
      .then(() => {
        console.log("Name updated");
      })
      .catch((error) => console.error(error));
  };

  const handleVerifyEmail = () => {
    verifyEmail()
      .then(() => {
        toast.success("Verification email has been sent!");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-center mb-2">Register</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name="photo" placeholder="Your photo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={() => setAccepted(!accepted)}
          type="checkbox"
          label="Accept Terms and conditions"
        />
      </Form.Group>
      <p className="text-danger mb-2">{error}</p>
      <Button disabled={!accepted} variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
