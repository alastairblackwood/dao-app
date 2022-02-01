import { getModelForClass, prop } from '@typegoose/typegoose';

export class User {
  @prop({ type: String })
  public name?: string;

  @prop({
    required: true,
    unique: true,
    lowercase: true,
    type: String,
    // validate: [validator.isEmail, 'Invalid email address'],
  })
  public email!: string;

  @prop({ type: String })
  public password!: string;

  // @prop({ enum: ['user', 'admin'], default: 'user' })
  // public role?: string;
}

export default getModelForClass(User);
