import { getModelForClass, getName, prop, Ref } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class ProductToken {
  @prop({ required: true, unique: true })
  public _id!: Types.ObjectId;

  @prop({required: true})
  public name!: string;

  @prop({required: true})
  public description!: string;

  @prop({required: true})
  public imageUrl!: string;
}

export const ProductModel = getModelForClass(ProductToken);
