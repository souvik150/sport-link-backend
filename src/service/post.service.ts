import PostModel, { Post } from "../model/post.model";

// export function createPost(input: Partial<Post>) {
//   return PostModel.create(input);
// }

export function createPost(input: any) {
  return PostModel.create(input);
}
