import mongoose, { Document, Schema } from 'mongoose';

export interface IExample extends Document {
  name: string;
  description: string;
}

const exampleSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<IExample>('Example', exampleSchema);
