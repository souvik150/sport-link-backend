import { Request, Response } from "express";
import PostModel from "../model/post.model";
import UserModel from "../model/user.model";

import { CreatePostInput } from "../schema/post.schema";
import { createPost } from "../service/post.service";

export async function createPostHandler(
  req: Request<{}, {}, CreatePostInput>,
  res: Response
) {
  const userId = res.locals.user._id;
  const body = req.body;

  try {
    const post = await createPost(body);
    const user = await UserModel.findById(userId);
    if (!user) {
      return;
    }
    console.log(user);

    // user.posts.push(post._id);
    // // save the user
    // await user.save();

    return res.send(post);
  } catch (e) {
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

export async function getPostByCategory(req: any, res: any) {
  const category = req.params.category;
  console.log(category);

  const posts = await PostModel.find({ category: category });

  try {
    return res.send(posts);
  } catch (e: any) {
    return res.status(500).send(e);
  }
}
