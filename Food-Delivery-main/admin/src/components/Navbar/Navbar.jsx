import React, { useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import {useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();
  const {token, admin, setAdmin, setToken } = useContext(StoreContext);
  const logout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setToken("");
    setAdmin(false);
    toast.success("Logout Successfully")
    navigate("/");
  }
  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="brand-name">BaMEE</h1>
      </div>
      <p className="brand-subtitle">Admin Panel</p>
      {token && admin ? (
        <button type="button" className="login-conditon" onClick={logout}>
          Logout
        </button>
      ) : (
        <button type="button" className="login-conditon" onClick={()=>navigate("/")}>
          Login
        </button>
      )}
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
