import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-4">
        <img
          className="w-12 h-12 rounded-full"
          src={`${user ? user.photoURL : userImg}`}
          alt=""
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary">
            Login
          </Link>
        )}
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Navbar;
