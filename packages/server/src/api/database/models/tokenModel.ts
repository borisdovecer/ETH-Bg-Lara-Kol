import mongoose, { Schema, Document } from 'mongoose';

interface IToken extends Document {
  name: string;
  // more, more, yeah, more...
}

const TokenSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Token = mongoose.model<IToken>('Token', TokenSchema);

export default Token;
