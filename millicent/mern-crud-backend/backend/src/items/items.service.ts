import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './items.model';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }

  async findById(id: string): Promise<Item> {
    return await this.itemModel.findById(id).exec();
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndDelete(id).exec(); // Adjusted to return the deleted item
  }
}
