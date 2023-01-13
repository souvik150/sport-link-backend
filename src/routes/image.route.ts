import express from "express";
import multer from "multer";

const { addImage } = require("../controllers/image.controller");
const router = express.Router();
// Setting up multer as a middleware to grab photo uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("file");
// POST - Add Image to Cloud Storage
router.post("/upload", upload, addImage);
module.exports = {
  routes: router,
};
