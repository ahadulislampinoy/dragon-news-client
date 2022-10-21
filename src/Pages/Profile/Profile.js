import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h4>Name: {user.displayName}</h4>
      <p>Email: {user.email}</p>
      <img className="img-fluid rounded" src={user.photoURL} alt="" />
    </div>
  );
};

export default Profile;
