import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Post {
  @prop({ required: true })
  category: string;

  @prop({ required: true })
  image: string;

  @prop({ required: true })
  caption: string;

  @prop({ default: 0 })
  likes: number;

  @prop({ default: 0 })
  commentsNumber: number;

  // @prop({})
}

const PostModel = getModelForClass(Post);

export default PostModel;
