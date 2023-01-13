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
  }),
});

export type CreatePostInput = TypeOf<typeof createPostSchema>["body"];
