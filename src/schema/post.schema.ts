import { object, string, number, TypeOf, array } from "zod";

export const createPostSchema = object({
  body: object({
    category: string({
      required_error: "Category name is required",
    }),
    image: string({
      required_error: "Image is required",
    }),
    caption: string({
      required_error: "Caption is required",
    }),
    likes: number({
      required_error: "likes should be number",
    }),
    commentsNumber: number({
      required_error: "comments should be number",
    }),
    posts: array(string()),
  }),
});

export type CreatePostInput = TypeOf<typeof createPostSchema>["body"];
