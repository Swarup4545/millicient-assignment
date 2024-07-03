// import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
// import { ItemsService } from './items.service';
// import { Item } from './items.model';

// @Controller('items')
// export class ItemsController {
//   constructor(private readonly itemsService: ItemsService) {}

//   @Post()
//   async create(@Body() createItemDto: Item): Promise<Item> {
//     return this.itemsService.create(createItemDto);
//   }

//   @Get()
//   async findAll(): Promise<Item[]> {
//     return this.itemsService.findAll();
//   }

//   @Get(':id')
//   async findById(@Param('id') id: string): Promise<Item> {
//     return this.itemsService.findById(id);
//   }

//   @Put(':id')
//   async update(@Param('id') id: string, @Body() updateItemDto: Item): Promise<Item> {
//     return this.itemsService.update(id, updateItemDto);
//   }

//   @Delete(':id')
//   async delete(@Param('id') id: string): Promise<Item> {
//     return this.itemsService.delete(id);
//   }
// }

import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.model';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  async create(@Body() createItemDto: Item): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Post('upload')
  async upload(@Body() uploadItemDto: any): Promise<any> {
    // Implement your upload logic here
    return { message: 'Item uploaded successfully', data: uploadItemDto };
  }

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateItemDto: Item): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Item> {
    return this.itemsService.delete(id);
  }
}

