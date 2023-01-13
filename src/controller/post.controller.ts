import { Request, Response } from "express";
import mongoose from "mongoose";
import { CreatePostInput } from "../schema/post.schema";
import PostModel from "../model/post.model";
import { createPost } from "../service/post.service";

export async function createPostHandler(req: any, res: any) {
  const category = req.category;
  const image = req.image;
  const caption = req.caption;
  const likes = 0;
  const commentsNumber = 0;

  const body = { category, image, caption, likes, commentsNumber };

  try {
    const post = await createPost(body);
    return res.send(post);
  } catch (e: any) {
    return res.status(500).send(e);
  }
}

export async function getPostHandler(req: any, res: any) {
  const posts = await PostModel.find();

  try {
    return res.send(posts);
  } catch (e: any) {
    return res.status(500).send(e);
  }
}
