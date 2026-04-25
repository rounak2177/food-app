import userModel from "../models/userModel.js";
import mongoose from "mongoose";

const localCarts = {};

const hasDbConnection = () => mongoose.connection.readyState === 1;

const getLocalCart = (userId) => {
  if (!localCarts[userId]) {
    localCarts[userId] = {};
  }
  return localCarts[userId];
};

// add items to user cart
const addToCart = async (req, res) => {
  try {
    if (!hasDbConnection()) {
      const cartData = getLocalCart(req.body.userId);
      if (!cartData[req.body.itemId]) {
        cartData[req.body.itemId] = 1;
      } else {
        cartData[req.body.itemId] += 1;
      }
      return res.json({ success: true, message: "Added to Cart" });
    }
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove from cart
const removeFromCart = async (req, res) => {
  try {
    if (!hasDbConnection()) {
      const cartData = getLocalCart(req.body.userId);
      if (cartData[req.body.itemId] > 1) {
        cartData[req.body.itemId] -= 1;
      } else {
        delete cartData[req.body.itemId];
      }
      return res.json({ success: true, message: "Removed from Cart" });
    }
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 1) {
      cartData[req.body.itemId] -= 1;
    } else {
      delete cartData[req.body.itemId];
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Removed from Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// fetch user cart data
const getCart = async (req, res) => {
  try {
    if (!hasDbConnection()) {
      const cartData = getLocalCart(req.body.userId);
      return res.json({ success: true, cartData: cartData });
    }
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData: cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// clear user cart data
const clearCart = async (req, res) => {
  try {
    if (!hasDbConnection()) {
      localCarts[req.body.userId] = {};
      return res.json({ success: true, message: "Cart Cleared" });
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
    return res.json({ success: true, message: "Cart Cleared" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart, clearCart };
