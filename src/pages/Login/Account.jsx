import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { Helmet } from "react-helmet-async";

const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      console.log("you are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Welcome to account page" />
        <link rel="canonical" href="/account" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1>Account</h1>
      <p>User Email: {user && user.email} </p>

      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
};

export default Account;
