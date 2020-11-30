import { getModelForClass, getName, prop, Ref } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class Product {
  @prop()
  public name!: string;

  @prop({required: true})
  public description!: string;

  @prop({required: true})
  public imageUrl!: string;
}

export const ProductModel = getModelForClass(Product);
