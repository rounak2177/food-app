import foodModel from "../models/foodModel.js";
import userModel from "../models/userModel.js";
import fs from "fs";
import mongoose from "mongoose";

const bootstrapAdminEmail = "admin@gmail.com";
const bootstrapAdminId = "bootstrap-admin";
const fallbackFoods = [];

const hasDbConnection = () => mongoose.connection.readyState === 1;

const getUserDataSafely = async (userId) => {
  if (!userId || userId === bootstrapAdminId || !hasDbConnection()) {
    return null;
  }
  try {
    return await userModel.findById(userId);
  } catch {
    return null;
  }
};

const isAdminUser = (userData, userId) =>
  userId === bootstrapAdminId ||
  (userData && (userData.role === "admin" || userData.email === bootstrapAdminEmail));

// add food items

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    const userData = await getUserDataSafely(req.body.userId);
    if (isAdminUser(userData, req.body.userId)) {
      if (hasDbConnection()) {
        await food.save();
      } else {
        fallbackFoods.unshift({
          _id: `local-${Date.now()}`,
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          category: req.body.category,
          image: image_filename,
        });
      }
      res.json({ success: true, message: "Food Added" });
    } else {
      res.json({ success: false, message: "You are not admin" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all foods
const listFood = async (req, res) => {
  try {
    const foods = hasDbConnection() ? await foodModel.find({}) : fallbackFoods;
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    const userData = await getUserDataSafely(req.body.userId);
    if (isAdminUser(userData, req.body.userId)) {
      if (hasDbConnection()) {
        const food = await foodModel.findById(req.body.id);
        if (food?.image) {
          fs.unlink(`uploads/${food.image}`, () => {});
        }
        await foodModel.findByIdAndDelete(req.body.id);
      } else {
        const index = fallbackFoods.findIndex((item) => item._id === req.body.id);
        if (index !== -1) {
          const [food] = fallbackFoods.splice(index, 1);
          if (food?.image) {
            fs.unlink(`uploads/${food.image}`, () => {});
          }
        }
      }
      res.json({ success: true, message: "Food Removed" });
    } else {
      res.json({ success: false, message: "You are not admin" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
