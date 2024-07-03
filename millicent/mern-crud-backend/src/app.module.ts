// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ItemsModule } from './items/items.module';


// export const AppModule = () => {
//   return {
//     module: AppModule,
//     imports: [
//       MongooseModule.forRoot('mongodb://localhost/nest'),
//       ItemsModule,
     
//     ],
//   };
// };

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    ItemsModule,
  ],
})
export class AppModule {}
