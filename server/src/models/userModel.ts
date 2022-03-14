import {
  getModelForClass,
  modelOptions,
  prop,
  pre,
  post,
} from '@typegoose/typegoose';
import bcrypt from 'bcryptjs';

@modelOptions({
  schemaOptions: {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  },
})
@pre<User>('save', async function (next): Promise<void> {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
})
export class User {
  // @prop({ type: String, required: true })
  // name!: string;

  @prop({ type: String, required: true })
  email!: string;

  @prop({ type: String, required: true })
  password!: string;

  // @prop({ type: Boolean, required: true, default: false })
  // isAdmin?: boolean;

  public _id?: string;
}

export default getModelForClass(User);
