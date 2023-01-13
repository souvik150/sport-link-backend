import express from "express";
import {
  createPostHandler,
  getPostHandler,
} from "../controller/post.controller";
import validateResource from "../middleware/validateResource";
import requireUser from "../middleware/requireUser";
import { createPostSchema } from "../schema/post.schema";

const router = express.Router();

router.post(
  "/api/posts",
  // validateResource(createPostSchema),
  createPostHandler
);

router.get(
  "/api/posts",
  // validateResource(createPostSchema),
  getPostHandler
);

export default router;
