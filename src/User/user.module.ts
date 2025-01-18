import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Import Entity User để sử dụng trong service
  providers: [UserService], // Cung cấp UserService cho module này
  controllers: [UserController], // Đăng ký UserController
  exports: [UserService], // Export UserService nếu cần dùng ở module khác
})
export class UserModule {}
