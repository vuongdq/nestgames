import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { CategoryModule } from './category/category.module';
import { User } from './user/user.entity';  // Import entity User
import { Game } from './game/game.entity';  // Import entity Game
import { Category } from './category/category.entity';  // Import entity Category

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Vuong1',
      database: 'nestgames',
      entities: [User, Game, Category], // Thêm các entity đã import vào đây
      synchronize: true,  // Chỉ dùng cho môi trường phát triển
    }),
    UserModule,
    GameModule,
    CategoryModule,
  ],
})
export class AppModule {}
