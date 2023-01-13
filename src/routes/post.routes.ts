import express from "express";
import {
  createPostHandler,
  getPostHandler,
  getPostByCategory,
} from "../controller/post.controller";
import validateResource from "../middleware/validateResource";
import requireUser from "../middleware/requireUser";
import { createPostSchema } from "../schema/post.schema";

import firebase from "./../utils/firebase";

const router = express.Router();

router.post(
  "/api/posts",
  [requireUser, validateResource(createPostSchema)],
  createPostHandler
);

router.get(
  "/api/posts",
  //  requireUser,
  getPostHandler
);

router.get("/api/posts/:category", requireUser, getPostByCategory);

export default router;
