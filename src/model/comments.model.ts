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
export class Comment {
  @prop({ required: true })
  from: string;

  @prop({ required: true })
  text: string;

  @prop({ default: 0 })
  likes: number;
}

const CommentModel = getModelForClass(Comment);

export default CommentModel;
