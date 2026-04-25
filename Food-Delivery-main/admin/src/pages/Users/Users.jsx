import React, { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Users.css";

const formatDate = (value) => {
  if (!value) {
    return "-";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "-";
  }
  return date.toLocaleString();
};

const formatCurrency = (value) => {
  const amount = Number(value) || 0;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

const Users = ({ url }) => {
  const navigate = useNavigate();
  const { token, admin } = useContext(StoreContext);
  const [users, setUsers] = useState([]);
  const [summary, setSummary] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);

  const activeRate = useMemo(() => {
    if (!summary.totalUsers) {
      return "0%";
    }
    return `${Math.round((summary.activeUsers / summary.totalUsers) * 100)}%`;
  }, [summary]);

  const fetchUsersActivity = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/user/dashboard`, {
        headers: { token },
      });

      if (response.data.success) {
        setUsers(response.data.data || []);
        setSummary(
          response.data.summary || {
            totalUsers: 0,
            activeUsers: 0,
            totalOrders: 0,
            totalRevenue: 0,
          }
        );
      } else {
        toast.error(response.data.message || "Unable to load users activity");
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to load users activity");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!admin && !token) {
      toast.error("Please Login First");
      navigate("/");
      return;
    }
    fetchUsersActivity();
  }, []);

  return (
    <div className="users-dashboard add flex-col">
      <h3>Users Activity Dashboard</h3>
      <p className="users-subtext">Track account signups and user behavior in one view.</p>

      <div className="users-summary-grid">
        <div className="users-summary-card">
          <span>Total Users</span>
          <strong>{summary.totalUsers}</strong>
        </div>
        <div className="users-summary-card">
          <span>Active Users</span>
          <strong>{summary.activeUsers}</strong>
        </div>
        <div className="users-summary-card">
          <span>Total Orders</span>
          <strong>{summary.totalOrders}</strong>
        </div>
        <div className="users-summary-card">
          <span>Total Revenue</span>
          <strong>{formatCurrency(summary.totalRevenue)}</strong>
        </div>
        <div className="users-summary-card">
          <span>Active Rate</span>
          <strong>{activeRate}</strong>
        </div>
      </div>

      <div className="users-table-wrap">
        <div className="users-table users-table-head">
          <b>Name</b>
          <b>Email</b>
          <b>Joined</b>
          <b>Last Activity</b>
          <b>Orders</b>
          <b>Paid</b>
          <b>Cart</b>
          <b>Spent</b>
        </div>

        {loading ? (
          <p className="users-loading">Loading users activity...</p>
        ) : users.length ? (
          users.map((user) => (
            <div key={user.id} className="users-table">
              <p>{user.name || "-"}</p>
              <p>{user.email || "-"}</p>
              <p>{formatDate(user.joinedAt)}</p>
              <p>{formatDate(user.lastActivityAt)}</p>
              <p>{user.totalOrders}</p>
              <p>{user.paidOrders}</p>
              <p>{user.cartItems}</p>
              <p>{formatCurrency(user.totalSpent)}</p>
            </div>
          ))
        ) : (
          <p className="users-loading">No users found yet.</p>
        )}
      </div>
    </div>
  );
};

export default Users;
