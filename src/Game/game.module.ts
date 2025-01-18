import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { Game } from './game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game])], // Import Entity Game để sử dụng trong service
  providers: [GameService], // Cung cấp GameService cho module này
  controllers: [GameController], // Đăng ký GameController
  exports: [GameService], // Export GameService nếu cần dùng ở module khác
})
export class GameModule {}
